import {Pixelizer, type RGB} from '@markab-j/pixelizer';

interface PixelizeData {
    imageData: ImageData;
    pixelSize: number;
    palette?: RGB[];
}

self.onmessage = function (e: MessageEvent<PixelizeData>) {
    const { imageData, pixelSize, palette } = e.data;

    const pixelizer = new Pixelizer();

    let pixelizedImageData = pixelizer.pixelate(imageData, pixelSize);

    if (palette && palette.length !== 0) {
        pixelizedImageData = pixelizer.applyPalette(pixelizedImageData, palette);
    }

    self.postMessage(pixelizedImageData, {
        transfer: [pixelizedImageData.data.buffer],
    });
};