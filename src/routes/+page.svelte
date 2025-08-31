<script lang="ts">
    import { PaletteExtractor, Pixelizer, type RGB } from "@markab-j/pixelizer";
    import {
        DownloadIcon,
        ImageOffIcon,
        PaletteIcon,
        Trash2Icon,
    } from "@lucide/svelte";
    import Button from "$lib/components/button.svelte";
    import Badge from '$lib/components/badge.svelte';
    import ThemeToggleButton from "$lib/components/theme-toggle-button.svelte";
    import { getImageDataFromObjectURL } from "$lib/utils";

    let originalImageFileList = $state<FileList>();
    let originalImageFile = $state<File | null>(null);
    let originalImageData = $state<ImageData | null>(null);
    let originalImageUrl = $state<string>("");
    const isUploaded = $derived(
        originalImageFileList && originalImageFileList.length !== null,
    );

    $effect(() => {
        if (
            originalImageFileList === undefined ||
            originalImageFileList.length === 0
        ) {
            originalImageUrl = "";
            originalImageFile = null;
            originalImageData = null;
            pixelizedImageData = null;
            return;
        }

        originalImageData = null;
        pixelizedImageData = null;

        const imageFile = originalImageFileList[0];
        originalImageFile = imageFile;

        const newImageUrl = URL.createObjectURL(imageFile);
        originalImageUrl = newImageUrl;

        async function loadImageData() {
            const imageData = await getImageDataFromObjectURL(newImageUrl);

            if (originalImageFile === imageFile) {
                originalImageData = imageData;
            }
        }

        loadImageData();

        return () => {
            URL.revokeObjectURL(newImageUrl);
        };
    });

    let pixelizedImageData = $state<ImageData | null>(null);
    let pixelSize = $state(16);
    let pixelizedCanvas = $state<HTMLCanvasElement | null>(null);

    const pixelizer = new Pixelizer();

    async function handlePixelize() {
        if (originalImageData) {
            pixelizedImageData = pixelizer.pixelate(originalImageData, pixelSize);
            if (palette.length !== 0)
                pixelizedImageData = pixelizer.applyPalette(pixelizedImageData, palette);
        }
    }

    $effect(() => {
        if (pixelizedCanvas && pixelizedImageData) {
            const ctx = pixelizedCanvas.getContext("2d");
            pixelizedCanvas.width = pixelizedImageData.width;
            pixelizedCanvas.height = pixelizedImageData.height;
            if (ctx) ctx.putImageData(pixelizedImageData, 0, 0);
        }
    });

    let palette = $state<RGB[]>([]);
    let paletteFileList = $state<FileList>();
    let paletteInput = $state<HTMLInputElement>();
    const paletteExtractor = new PaletteExtractor();

    function clearPalette() {
        palette = [];
        paletteFileList = undefined;
        if (paletteInput) paletteInput.value = "";
    }

    $effect(() => {
        if (paletteFileList === undefined || paletteFileList.length === 0) {
            return clearPalette();
        }

        const imageFile = paletteFileList[0];
        const objectURL = URL.createObjectURL(imageFile);

        async function loadPalette() {
            try {
                const imageData = await getImageDataFromObjectURL(objectURL);
                palette = paletteExtractor.extract(imageData);
            } finally {
                URL.revokeObjectURL(objectURL);
            }
        }

        loadPalette();
    });

    function handleDownload() {
        if (pixelizedCanvas)
            pixelizedCanvas.toBlob((blob) => {
                if (!blob) {
                    console.error("blob data failed");
                    return;
                }

                if (originalImageFile && pixelizedImageData) {
                    const url = URL.createObjectURL(blob);

                    const link = document.createElement("a");
                    link.href = url;
                    link.download = `Converted_${pixelizedImageData.width}x${pixelizedImageData.height}_${originalImageFile.name}`;

                    link.click();

                    URL.revokeObjectURL(url);
                }
            }, "image/png");
    }
</script>

{@debug palette, originalImageFile}

<div class="relative flex flex-col items-center justify-center min-h-screen p-4">
  <header class="flex items-center text-center mb-4 gap-4">
    <ThemeToggleButton class="absolute left-10" />
    <h1 class="text-4xl font-black tracking-tighter">PIXELIZER</h1>
  </header>

  <main class="w-full max-w-7xl flex flex-col items-center flex-grow gap-4">
    <div class="w-full grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-6">
      <!-- 왼쪽 패널 -->
      <div class="relative aspect-square flex items-center justify-center border-2 border-dashed">
        <input
          class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          id="original"
          name="original"
          type="file"
          accept="image/png"
          bind:files={originalImageFileList}
        >
        {#if originalImageUrl}
          <img alt="original" class="max-w-full max-h-full object-contain" src={originalImageUrl}/>
        {:else}
          <p class="text-muted-foreground text-sm mt-1">이미지를 드래그 앤 드롭 또는 클릭해서 선택</p>
        {/if}

        {#if originalImageData}
          <Badge class="absolute left-1 bottom-1 opacity-20 hover:opacity-60">{originalImageData.width} X {originalImageData.height}</Badge>
        {/if}
      </div>

      <!-- 중앙 변환 -->
      <div class="flex flex-col items-center gap-2 w-full lg:w-auto px-4 py-8">
        <div class="w-full max-w-[200px]">
          <div class="flex justify-between items-center mb-2">
            <label for="pixel-size" class="flex-grow text-sm font-medium text-muted-foreground">픽셀 사이즈</label>
            <input class="w-12 text-center border"
                   type="number"
                   min="1" max="64"
                   bind:value={pixelSize}
            />
          </div>
          <input class="appearance-none bg-foreground/30 rounded-lg h-2
                        [&::-webkit-slider-thumb]:appearance-none
                        [&::-webkit-slider-thumb]:rounded-xl
                        [&::-webkit-slider-thumb]:size-4
                        [&::-webkit-slider-thumb]:bg-foreground/70"
                 id="pixel-size"
                 type="range"
                 min="1" max="64"
                 bind:value={pixelSize}
          >
        </div>
        <Badge class={originalImageData ? "visible" : "invisible"}>
          {originalImageData ? `${Math.floor(originalImageData.width / pixelSize)} X ${Math.floor(originalImageData.height / pixelSize)}` : 'none X none'}
        </Badge>
        <Button class="h-9 px-4 py-2 bg-primary text-primary-foreground shadow-xs hover:bg-primary/90"
                onclick={handlePixelize}
                disabled={!isUploaded}
        >
          변환
        </Button>
      </div>

      <!-- 오른쪽 패널 -->
      <div class="relative aspect-square flex flex-col items-center justify-center border-2 border-dashed">
        {#if pixelizedImageData}
          <canvas bind:this={pixelizedCanvas} class="object-contain w-full h-full"
                  style="image-rendering: pixelated;
                  image-rendering: -moz-crisp-edges;
                  image-rendering: crisp-edges;"
          ></canvas>
        {:else}
          <div class="text-center p-4">
            <ImageOffIcon class="mx-auto size-12 text-muted-foreground" />
          </div>
        {/if}
        {#if pixelizedImageData}
          <Badge class="absolute left-1 bottom-1 opacity-20 hover:opacity-60">
            {pixelizedImageData.width} X {pixelizedImageData.height}
          </Badge>
          <Button class="absolute right-1 bottom-1 hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50"
                  onclick={handleDownload}
          >
            <DownloadIcon />
          </Button>
        {/if}
      </div>
    </div>

    <div class="w-full flex flex-col gap-2">
      <div class="flex items-center gap-4">
        <PaletteIcon class="size-6" />
        {#if palette.length === 0}
          <h2 class="text-2xl font-bold">팔레트</h2>
        {:else}
          <h2 class="text-2xl font-bold">팔레트 {palette.length}개 로드</h2>
          <button onclick={clearPalette}>
            <Trash2Icon />
          </button>
        {/if}
      </div>

      <div class="relative flex min-h-28 border rounded-2xl justify-center items-center">
        <input
          class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          type="file"
          accept="image/png"
          bind:this={paletteInput}
          bind:files={paletteFileList}
        />
        {#if palette.length > 0}
          <div class="p-4 flex flex-wrap gap-3">
            {#each palette as color, i (i)}
              <div
                class="rounded-full size-6 border-2 border-border"
                style="background-color: rgb({color.r}, {color.g}, {color.b})"
                title="rgb({color.r}, {color.g}, {color.b})"
              ></div>
            {/each}
          </div>
        {:else}
          <div class="flex items-center justify-center h-full text-muted-foreground text-sm">
            <p>사용할 팔레트를 로드하세요.</p>
          </div>
        {/if}
      </div>
    </div>
  </main>
</div>