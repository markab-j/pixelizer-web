import"../chunks/DsnmJJEf.js";import{aq as Rt,ar as ir,as as lr,b as Nt,h as B,a as it,t as c,w as cr,c as dr,H as ur,d as wt,s as Le,f as Ge,m as he,ag as fr,at as mr,i as He,k as pr,j as $e,au as yt,g as pt,a8 as gr,av as kt,aw as Tt,ax as qe,l as gt,p as Lt,ay as Xe,az as hr,aA as Qe,aB as ht,ah as br,aC as vr,aD as xr,aE as wr,A as Gt,am as Ot,aF as jt,q as yr,aG as kr,aH as _r,E as zr,aI as Mr,ak as $r,aJ as Cr,aK as Ut,r as Vt,ab as Sr,u as Er,aL as Ir,V as ee,aM as Ar,ao as se,Z as $,_ as te,$ as j,a1 as D,aN as ie,a0 as G,ac as ne,X as K,ad as Oe,aO as Pr,W as J,Y as xe,aP as Ce,aQ as Rr,O as et,aa as Q,y as R,x as Nr,a9 as Tr,ae as Ve,a2 as De}from"../chunks/B1Ktwiqp.js";import{p as Ne,r as fe,s as we,i as pe}from"../chunks/D2wwjbDz.js";import{o as lt,p as Lr,q as Gr,r as Or,u as jr,v as _t,s as zt,w as Ur}from"../chunks/0yGTka2y.js";import{b as Mt}from"../chunks/CeL_S2gJ.js";const Vr=[];function Dr(e,t=!1,r=!1){return Be(e,new Map,"",Vr,null,r)}function Be(e,t,r,o,n=null,s=!1){if(typeof e=="object"&&e!==null){var a=t.get(e);if(a!==void 0)return a;if(e instanceof Map)return new Map(e);if(e instanceof Set)return new Set(e);if(Rt(e)){var l=Array(e.length);t.set(e,l),n!==null&&t.set(n,l);for(var i=0;i<e.length;i+=1){var g=e[i];i in e&&(l[i]=Be(g,t,r,o,null,s))}return l}if(ir(e)===lr){l={},t.set(e,l),n!==null&&t.set(n,l);for(var h in e)l[h]=Be(e[h],t,r,o,null,s);return l}if(e instanceof Date)return structuredClone(e);if(typeof e.toJSON=="function"&&!s)return Be(e.toJSON(),t,r,o,e)}if(e instanceof EventTarget)return e;try{return structuredClone(e)}catch{return e}}function Dt(e,t){return t}function Fr(e,t,r){for(var o=e.items,n=[],s=t.length,a=0;a<s;a++)vr(t[a].e,n,!0);var l=s>0&&n.length===0&&r!==null;if(l){var i=r.parentNode;xr(i),i.append(r),o.clear(),ae(e,t[0].prev,t[s-1].next)}wr(n,()=>{for(var g=0;g<s;g++){var h=t[g];l||(o.delete(h.k),ae(e,h.prev,h.next)),ht(h.e,!l)}})}function Ft(e,t,r,o,n,s=null){var a=e,l={flags:t,items:new Map,first:null},i=(t&jt)!==0;if(i){var g=e;a=B?Le(Ot(g)):g.appendChild(pt())}B&&it();var h=null,z=!1,C=new Map,S=cr(()=>{var M=r();return Rt(M)?M:M==null?[]:Tt(M)}),p,x;function _(){Wr(x,p,l,C,a,n,t,o,r),s!==null&&(p.length===0?h?gt(h):h=He(()=>s(a)):h!==null&&Lt(h,()=>{h=null}))}Nt(()=>{x??=Gt,p=c(S);var M=p.length;if(z&&M===0)return;z=M===0;let A=!1;if(B){var N=dr(a)===ur;N!==(M===0)&&(a=wt(),Le(a),Ge(!1),A=!0)}if(B){for(var T=null,E,v=0;v<M;v++){if(he.nodeType===fr&&he.data===mr){a=he,A=!0,Ge(!1);break}var k=p[v],m=o(k,v);E=ct(he,l,T,null,k,m,v,n,t,r),l.items.set(m,E),T=E}M>0&&Le(wt())}if(B)M===0&&s&&(h=He(()=>s(a)));else if(pr()){var U=new Set,re=$e;for(v=0;v<M;v+=1){k=p[v],m=o(k,v);var Z=l.items.get(m)??C.get(m);Z?(t&(Xe|qe))!==0&&Wt(Z,k,v,t):(E=ct(null,l,null,null,k,m,v,n,t,r,!0),C.set(m,E)),U.add(m)}for(const[F,le]of l.items)U.has(F)||re.skipped_effects.add(le.e);re.add_callback(_)}else _();A&&Ge(!0),c(S)}),B&&(a=he)}function Wr(e,t,r,o,n,s,a,l,i){var g=(a&kr)!==0,h=(a&(Xe|qe))!==0,z=t.length,C=r.items,S=r.first,p=S,x,_=null,M,A=[],N=[],T,E,v,k;if(g)for(k=0;k<z;k+=1)T=t[k],E=l(T,k),v=C.get(E),v!==void 0&&(v.a?.measure(),(M??=new Set).add(v));for(k=0;k<z;k+=1){if(T=t[k],E=l(T,k),v=C.get(E),v===void 0){var m=o.get(E);if(m!==void 0){o.delete(E),C.set(E,m);var U=_?_.next:p;ae(r,_,m),ae(r,m,U),tt(m,U,n),_=m}else{var re=p?p.e.nodes_start:n;_=ct(re,r,_,_===null?r.first:_.next,T,E,k,s,a,i)}C.set(E,_),A=[],N=[],p=_.next;continue}if(h&&Wt(v,T,k,a),(v.e.f&Qe)!==0&&(gt(v.e),g&&(v.a?.unfix(),(M??=new Set).delete(v))),v!==p){if(x!==void 0&&x.has(v)){if(A.length<N.length){var Z=N[0],F;_=Z.prev;var le=A[0],ce=A[A.length-1];for(F=0;F<A.length;F+=1)tt(A[F],Z,n);for(F=0;F<N.length;F+=1)x.delete(N[F]);ae(r,le.prev,ce.next),ae(r,_,le),ae(r,ce,Z),p=Z,_=ce,k-=1,A=[],N=[]}else x.delete(v),tt(v,p,n),ae(r,v.prev,v.next),ae(r,v,_===null?r.first:_.next),ae(r,_,v),_=v;continue}for(A=[],N=[];p!==null&&p.k!==E;)(p.e.f&Qe)===0&&(x??=new Set).add(p),N.push(p),p=p.next;if(p===null)continue;v=p}A.push(v),_=v,p=v.next}if(p!==null||x!==void 0){for(var H=x===void 0?[]:Tt(x);p!==null;)(p.e.f&Qe)===0&&H.push(p),p=p.next;var W=H.length;if(W>0){var Y=(a&jt)!==0&&z===0?n:null;if(g){for(k=0;k<W;k+=1)H[k].a?.measure();for(k=0;k<W;k+=1)H[k].a?.fix()}Fr(r,H,Y)}}g&&yr(()=>{if(M!==void 0)for(v of M)v.a?.apply()}),e.first=r.first&&r.first.e,e.last=_&&_.e;for(var b of o.values())ht(b.e);o.clear()}function Wt(e,t,r,o){(o&Xe)!==0&&yt(e.v,t),(o&qe)!==0?yt(e.i,r):e.i=r}function ct(e,t,r,o,n,s,a,l,i,g,h){var z=(i&Xe)!==0,C=(i&hr)===0,S=z?C?gr(n,!1,!1):kt(n):n,p=(i&qe)===0?a:kt(a),x={i:p,v:S,k:s,a:null,e:null,prev:r,next:o};try{if(e===null){var _=document.createDocumentFragment();_.append(e=pt())}return x.e=He(()=>l(e,S,p,g),B),x.e.prev=r&&r.e,x.e.next=o&&o.e,r===null?h||(t.first=x):(r.next=x,r.e.next=x.e),o!==null&&(o.prev=x,o.e.prev=x.e),x}finally{}}function tt(e,t,r){for(var o=e.next?e.next.e.nodes_start:r,n=t?t.e.nodes_start:r,s=e.e.nodes_start;s!==null&&s!==o;){var a=br(s);n.before(s),s=a}}function ae(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function Br(e,t,r,o,n,s){let a=B;B&&it();var l,i,g=null;B&&he.nodeType===_r&&(g=he,it());var h=B?he:e,z;Nt(()=>{const C=t()||null;var S=Mr;C!==l&&(z&&(C===null?Lt(z,()=>{z=null,i=null}):C===i?gt(z):ht(z)),C&&C!==i&&(z=He(()=>{if(g=B?g:document.createElementNS(S,C),$r(g,g),o){B&&Cr(C)&&g.append(document.createComment(""));var p=B?Ot(g):g.appendChild(pt());B&&(p===null?Ge(!1):Le(p)),o(g,p)}Gt.nodes_end=g,h.before(g)})),l=C,l&&(i=l))},zr),a&&(Ge(!0),Le(h))}function $t(e,t,r=t){var o=new WeakSet;Ut(e,"input",async n=>{var s=n?e.defaultValue:e.value;if(s=rt(e)?ot(s):s,r(s),$e!==null&&o.add($e),await Sr(),s!==(s=t())){var a=e.selectionStart,l=e.selectionEnd;e.value=s??"",l!==null&&(e.selectionStart=a,e.selectionEnd=Math.min(l,e.value.length))}}),(B&&e.defaultValue!==e.value||Er(t)==null&&e.value)&&(r(rt(e)?ot(e.value):e.value),$e!==null&&o.add($e)),Vt(()=>{var n=t();if(e===document.activeElement){var s=Ir??$e;if(o.has(s))return}rt(e)&&n===ot(e.value)||e.type==="date"&&!n&&!e.value||n!==e.value&&(e.value=n??"")})}function rt(e){var t=e.type;return t==="number"||t==="range"}function ot(e){return e===""?null:+e}function Ct(e,t,r=t){Ut(e,"change",()=>{r(e.files)}),B&&e.files&&r(e.files),Vt(()=>{e.files=t()})}var Hr=class{extract(e){const{data:t,width:r,height:o}=e;if(r<0||o<0)return[];const n=[],s=new Set;for(let a=0;a<t.length;a+=4){const l=t[a],i=t[a+1],g=t[a+2],h=`${l},${i},${g}`;if(!s.has(h)){if(n.length>=256){console.warn("palette is full. (max: 256)");break}s.add(h),n.push({r:l,g:i,b:g})}}return n}};/**
 * @license @lucide/svelte v0.542.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const qr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var Xr=Ar("<svg><!><!></svg>");function ye(e,t){ee(t,!0);const r=Ne(t,"color",3,"currentColor"),o=Ne(t,"size",3,24),n=Ne(t,"strokeWidth",3,2),s=Ne(t,"absoluteStrokeWidth",3,!1),a=Ne(t,"iconNode",19,()=>[]),l=fe(t,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var i=Xr();lt(i,z=>({...qr,...l,width:o(),height:o(),stroke:r(),"stroke-width":z,class:["lucide-icon lucide",t.name&&`lucide-${t.name}`,t.class]}),[()=>s()?Number(n())*24/Number(o()):n()]);var g=j(i);Ft(g,17,a,Dt,(z,C)=>{var S=Oe(()=>Pr(c(C),2));let p=()=>c(S)[0],x=()=>c(S)[1];var _=ne(),M=K(_);Br(M,p,!0,(A,N)=>{lt(A,()=>({...x()}))}),$(z,_)});var h=D(g);se(h,()=>t.children??ie),G(i),$(e,i),te()}function Jr(e,t){ee(t,!0);/**
 * @license @lucide/svelte v0.542.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(t,["$$slots","$$events","$$legacy"]);const o=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];ye(e,we({name:"download"},()=>r,{get iconNode(){return o},children:(n,s)=>{var a=ne(),l=K(a);se(l,()=>t.children??ie),$(n,a)},$$slots:{default:!0}})),te()}function Yr(e,t){ee(t,!0);/**
 * @license @lucide/svelte v0.542.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(t,["$$slots","$$events","$$legacy"]);const o=[["line",{x1:"2",x2:"22",y1:"2",y2:"22"}],["path",{d:"M10.41 10.41a2 2 0 1 1-2.83-2.83"}],["line",{x1:"13.5",x2:"6",y1:"13.5",y2:"21"}],["line",{x1:"18",x2:"21",y1:"12",y2:"15"}],["path",{d:"M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59"}],["path",{d:"M21 15V5a2 2 0 0 0-2-2H9"}]];ye(e,we({name:"image-off"},()=>r,{get iconNode(){return o},children:(n,s)=>{var a=ne(),l=K(a);se(l,()=>t.children??ie),$(n,a)},$$slots:{default:!0}})),te()}function Kr(e,t){ee(t,!0);/**
 * @license @lucide/svelte v0.542.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(t,["$$slots","$$events","$$legacy"]);const o=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56"}]];ye(e,we({name:"loader-circle"},()=>r,{get iconNode(){return o},children:(n,s)=>{var a=ne(),l=K(a);se(l,()=>t.children??ie),$(n,a)},$$slots:{default:!0}})),te()}function Zr(e,t){ee(t,!0);/**
 * @license @lucide/svelte v0.542.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(t,["$$slots","$$events","$$legacy"]);const o=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]];ye(e,we({name:"moon"},()=>r,{get iconNode(){return o},children:(n,s)=>{var a=ne(),l=K(a);se(l,()=>t.children??ie),$(n,a)},$$slots:{default:!0}})),te()}function Qr(e,t){ee(t,!0);/**
 * @license @lucide/svelte v0.542.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(t,["$$slots","$$events","$$legacy"]);const o=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor"}]];ye(e,we({name:"palette"},()=>r,{get iconNode(){return o},children:(n,s)=>{var a=ne(),l=K(a);se(l,()=>t.children??ie),$(n,a)},$$slots:{default:!0}})),te()}function eo(e,t){ee(t,!0);/**
 * @license @lucide/svelte v0.542.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(t,["$$slots","$$events","$$legacy"]);const o=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];ye(e,we({name:"sun"},()=>r,{get iconNode(){return o},children:(n,s)=>{var a=ne(),l=K(a);se(l,()=>t.children??ie),$(n,a)},$$slots:{default:!0}})),te()}function to(e,t){ee(t,!0);/**
 * @license @lucide/svelte v0.542.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(t,["$$slots","$$events","$$legacy"]);const o=[["path",{d:"M10 11v6"}],["path",{d:"M14 11v6"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];ye(e,we({name:"trash-2"},()=>r,{get iconNode(){return o},children:(n,s)=>{var a=ne(),l=K(a);se(l,()=>t.children??ie),$(n,a)},$$slots:{default:!0}})),te()}const bt="-",ro=e=>{const t=ao(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:a=>{const l=a.split(bt);return l[0]===""&&l.length!==1&&l.shift(),Bt(l,t)||oo(a)},getConflictingClassGroupIds:(a,l)=>{const i=r[a]||[];return l&&o[a]?[...i,...o[a]]:i}}},Bt=(e,t)=>{if(e.length===0)return t.classGroupId;const r=e[0],o=t.nextPart.get(r),n=o?Bt(e.slice(1),o):void 0;if(n)return n;if(t.validators.length===0)return;const s=e.join(bt);return t.validators.find(({validator:a})=>a(s))?.classGroupId},St=/^\[(.+)\]$/,oo=e=>{if(St.test(e)){const t=St.exec(e)[1],r=t?.substring(0,t.indexOf(":"));if(r)return"arbitrary.."+r}},ao=e=>{const{theme:t,classGroups:r}=e,o={nextPart:new Map,validators:[]};for(const n in r)dt(r[n],o,n,t);return o},dt=(e,t,r,o)=>{e.forEach(n=>{if(typeof n=="string"){const s=n===""?t:Et(t,n);s.classGroupId=r;return}if(typeof n=="function"){if(no(n)){dt(n(o),t,r,o);return}t.validators.push({validator:n,classGroupId:r});return}Object.entries(n).forEach(([s,a])=>{dt(a,Et(t,s),r,o)})})},Et=(e,t)=>{let r=e;return t.split(bt).forEach(o=>{r.nextPart.has(o)||r.nextPart.set(o,{nextPart:new Map,validators:[]}),r=r.nextPart.get(o)}),r},no=e=>e.isThemeGetter,so=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,r=new Map,o=new Map;const n=(s,a)=>{r.set(s,a),t++,t>e&&(t=0,o=r,r=new Map)};return{get(s){let a=r.get(s);if(a!==void 0)return a;if((a=o.get(s))!==void 0)return n(s,a),a},set(s,a){r.has(s)?r.set(s,a):n(s,a)}}},ut="!",ft=":",io=ft.length,lo=e=>{const{prefix:t,experimentalParseClassName:r}=e;let o=n=>{const s=[];let a=0,l=0,i=0,g;for(let p=0;p<n.length;p++){let x=n[p];if(a===0&&l===0){if(x===ft){s.push(n.slice(i,p)),i=p+io;continue}if(x==="/"){g=p;continue}}x==="["?a++:x==="]"?a--:x==="("?l++:x===")"&&l--}const h=s.length===0?n:n.substring(i),z=co(h),C=z!==h,S=g&&g>i?g-i:void 0;return{modifiers:s,hasImportantModifier:C,baseClassName:z,maybePostfixModifierPosition:S}};if(t){const n=t+ft,s=o;o=a=>a.startsWith(n)?s(a.substring(n.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:a,maybePostfixModifierPosition:void 0}}if(r){const n=o;o=s=>r({className:s,parseClassName:n})}return o},co=e=>e.endsWith(ut)?e.substring(0,e.length-1):e.startsWith(ut)?e.substring(1):e,uo=e=>{const t=Object.fromEntries(e.orderSensitiveModifiers.map(o=>[o,!0]));return o=>{if(o.length<=1)return o;const n=[];let s=[];return o.forEach(a=>{a[0]==="["||t[a]?(n.push(...s.sort(),a),s=[]):s.push(a)}),n.push(...s.sort()),n}},fo=e=>({cache:so(e.cacheSize),parseClassName:lo(e),sortModifiers:uo(e),...ro(e)}),mo=/\s+/,po=(e,t)=>{const{parseClassName:r,getClassGroupId:o,getConflictingClassGroupIds:n,sortModifiers:s}=t,a=[],l=e.trim().split(mo);let i="";for(let g=l.length-1;g>=0;g-=1){const h=l[g],{isExternal:z,modifiers:C,hasImportantModifier:S,baseClassName:p,maybePostfixModifierPosition:x}=r(h);if(z){i=h+(i.length>0?" "+i:i);continue}let _=!!x,M=o(_?p.substring(0,x):p);if(!M){if(!_){i=h+(i.length>0?" "+i:i);continue}if(M=o(p),!M){i=h+(i.length>0?" "+i:i);continue}_=!1}const A=s(C).join(":"),N=S?A+ut:A,T=N+M;if(a.includes(T))continue;a.push(T);const E=n(M,_);for(let v=0;v<E.length;++v){const k=E[v];a.push(N+k)}i=h+(i.length>0?" "+i:i)}return i};function go(){let e=0,t,r,o="";for(;e<arguments.length;)(t=arguments[e++])&&(r=Ht(t))&&(o&&(o+=" "),o+=r);return o}const Ht=e=>{if(typeof e=="string")return e;let t,r="";for(let o=0;o<e.length;o++)e[o]&&(t=Ht(e[o]))&&(r&&(r+=" "),r+=t);return r};function ho(e,...t){let r,o,n,s=a;function a(i){const g=t.reduce((h,z)=>z(h),e());return r=fo(g),o=r.cache.get,n=r.cache.set,s=l,l(i)}function l(i){const g=o(i);if(g)return g;const h=po(i,r);return n(i,h),h}return function(){return s(go.apply(null,arguments))}}const O=e=>{const t=r=>r[e]||[];return t.isThemeGetter=!0,t},qt=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Xt=/^\((?:(\w[\w-]*):)?(.+)\)$/i,bo=/^\d+\/\d+$/,vo=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,xo=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,wo=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,yo=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,ko=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Me=e=>bo.test(e),y=e=>!!e&&!Number.isNaN(Number(e)),ge=e=>!!e&&Number.isInteger(Number(e)),at=e=>e.endsWith("%")&&y(e.slice(0,-1)),ue=e=>vo.test(e),_o=()=>!0,zo=e=>xo.test(e)&&!wo.test(e),Jt=()=>!1,Mo=e=>yo.test(e),$o=e=>ko.test(e),Co=e=>!u(e)&&!f(e),So=e=>Se(e,Zt,Jt),u=e=>qt.test(e),ve=e=>Se(e,Qt,zo),nt=e=>Se(e,Ro,y),It=e=>Se(e,Yt,Jt),Eo=e=>Se(e,Kt,$o),Fe=e=>Se(e,er,Mo),f=e=>Xt.test(e),Te=e=>Ee(e,Qt),Io=e=>Ee(e,No),At=e=>Ee(e,Yt),Ao=e=>Ee(e,Zt),Po=e=>Ee(e,Kt),We=e=>Ee(e,er,!0),Se=(e,t,r)=>{const o=qt.exec(e);return o?o[1]?t(o[1]):r(o[2]):!1},Ee=(e,t,r=!1)=>{const o=Xt.exec(e);return o?o[1]?t(o[1]):r:!1},Yt=e=>e==="position"||e==="percentage",Kt=e=>e==="image"||e==="url",Zt=e=>e==="length"||e==="size"||e==="bg-size",Qt=e=>e==="length",Ro=e=>e==="number",No=e=>e==="family-name",er=e=>e==="shadow",To=()=>{const e=O("color"),t=O("font"),r=O("text"),o=O("font-weight"),n=O("tracking"),s=O("leading"),a=O("breakpoint"),l=O("container"),i=O("spacing"),g=O("radius"),h=O("shadow"),z=O("inset-shadow"),C=O("text-shadow"),S=O("drop-shadow"),p=O("blur"),x=O("perspective"),_=O("aspect"),M=O("ease"),A=O("animate"),N=()=>["auto","avoid","all","avoid-page","page","left","right","column"],T=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],E=()=>[...T(),f,u],v=()=>["auto","hidden","clip","visible","scroll"],k=()=>["auto","contain","none"],m=()=>[f,u,i],U=()=>[Me,"full","auto",...m()],re=()=>[ge,"none","subgrid",f,u],Z=()=>["auto",{span:["full",ge,f,u]},ge,f,u],F=()=>[ge,"auto",f,u],le=()=>["auto","min","max","fr",f,u],ce=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],H=()=>["start","end","center","stretch","center-safe","end-safe"],W=()=>["auto",...m()],Y=()=>[Me,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...m()],b=()=>[e,f,u],Ie=()=>[...T(),At,It,{position:[f,u]}],Ae=()=>["no-repeat",{repeat:["","x","y","space","round"]}],je=()=>["auto","cover","contain",Ao,So,{size:[f,u]}],ke=()=>[at,Te,ve],V=()=>["","none","full",g,f,u],q=()=>["",y,Te,ve],_e=()=>["solid","dashed","dotted","double"],Ue=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],L=()=>[y,at,At,It],Pe=()=>["","none",p,f,u],me=()=>["none",y,f,u],be=()=>["none",y,f,u],Re=()=>[y,f,u],ze=()=>[Me,"full",...m()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[ue],breakpoint:[ue],color:[_o],container:[ue],"drop-shadow":[ue],ease:["in","out","in-out"],font:[Co],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[ue],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[ue],shadow:[ue],spacing:["px",y],text:[ue],"text-shadow":[ue],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Me,u,f,_]}],container:["container"],columns:[{columns:[y,u,f,l]}],"break-after":[{"break-after":N()}],"break-before":[{"break-before":N()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:E()}],overflow:[{overflow:v()}],"overflow-x":[{"overflow-x":v()}],"overflow-y":[{"overflow-y":v()}],overscroll:[{overscroll:k()}],"overscroll-x":[{"overscroll-x":k()}],"overscroll-y":[{"overscroll-y":k()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:U()}],"inset-x":[{"inset-x":U()}],"inset-y":[{"inset-y":U()}],start:[{start:U()}],end:[{end:U()}],top:[{top:U()}],right:[{right:U()}],bottom:[{bottom:U()}],left:[{left:U()}],visibility:["visible","invisible","collapse"],z:[{z:[ge,"auto",f,u]}],basis:[{basis:[Me,"full","auto",l,...m()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[y,Me,"auto","initial","none",u]}],grow:[{grow:["",y,f,u]}],shrink:[{shrink:["",y,f,u]}],order:[{order:[ge,"first","last","none",f,u]}],"grid-cols":[{"grid-cols":re()}],"col-start-end":[{col:Z()}],"col-start":[{"col-start":F()}],"col-end":[{"col-end":F()}],"grid-rows":[{"grid-rows":re()}],"row-start-end":[{row:Z()}],"row-start":[{"row-start":F()}],"row-end":[{"row-end":F()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":le()}],"auto-rows":[{"auto-rows":le()}],gap:[{gap:m()}],"gap-x":[{"gap-x":m()}],"gap-y":[{"gap-y":m()}],"justify-content":[{justify:[...ce(),"normal"]}],"justify-items":[{"justify-items":[...H(),"normal"]}],"justify-self":[{"justify-self":["auto",...H()]}],"align-content":[{content:["normal",...ce()]}],"align-items":[{items:[...H(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...H(),{baseline:["","last"]}]}],"place-content":[{"place-content":ce()}],"place-items":[{"place-items":[...H(),"baseline"]}],"place-self":[{"place-self":["auto",...H()]}],p:[{p:m()}],px:[{px:m()}],py:[{py:m()}],ps:[{ps:m()}],pe:[{pe:m()}],pt:[{pt:m()}],pr:[{pr:m()}],pb:[{pb:m()}],pl:[{pl:m()}],m:[{m:W()}],mx:[{mx:W()}],my:[{my:W()}],ms:[{ms:W()}],me:[{me:W()}],mt:[{mt:W()}],mr:[{mr:W()}],mb:[{mb:W()}],ml:[{ml:W()}],"space-x":[{"space-x":m()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":m()}],"space-y-reverse":["space-y-reverse"],size:[{size:Y()}],w:[{w:[l,"screen",...Y()]}],"min-w":[{"min-w":[l,"screen","none",...Y()]}],"max-w":[{"max-w":[l,"screen","none","prose",{screen:[a]},...Y()]}],h:[{h:["screen","lh",...Y()]}],"min-h":[{"min-h":["screen","lh","none",...Y()]}],"max-h":[{"max-h":["screen","lh",...Y()]}],"font-size":[{text:["base",r,Te,ve]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[o,f,nt]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",at,u]}],"font-family":[{font:[Io,u,t]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[n,f,u]}],"line-clamp":[{"line-clamp":[y,"none",f,nt]}],leading:[{leading:[s,...m()]}],"list-image":[{"list-image":["none",f,u]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",f,u]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:b()}],"text-color":[{text:b()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[..._e(),"wavy"]}],"text-decoration-thickness":[{decoration:[y,"from-font","auto",f,ve]}],"text-decoration-color":[{decoration:b()}],"underline-offset":[{"underline-offset":[y,"auto",f,u]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:m()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",f,u]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",f,u]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:Ie()}],"bg-repeat":[{bg:Ae()}],"bg-size":[{bg:je()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},ge,f,u],radial:["",f,u],conic:[ge,f,u]},Po,Eo]}],"bg-color":[{bg:b()}],"gradient-from-pos":[{from:ke()}],"gradient-via-pos":[{via:ke()}],"gradient-to-pos":[{to:ke()}],"gradient-from":[{from:b()}],"gradient-via":[{via:b()}],"gradient-to":[{to:b()}],rounded:[{rounded:V()}],"rounded-s":[{"rounded-s":V()}],"rounded-e":[{"rounded-e":V()}],"rounded-t":[{"rounded-t":V()}],"rounded-r":[{"rounded-r":V()}],"rounded-b":[{"rounded-b":V()}],"rounded-l":[{"rounded-l":V()}],"rounded-ss":[{"rounded-ss":V()}],"rounded-se":[{"rounded-se":V()}],"rounded-ee":[{"rounded-ee":V()}],"rounded-es":[{"rounded-es":V()}],"rounded-tl":[{"rounded-tl":V()}],"rounded-tr":[{"rounded-tr":V()}],"rounded-br":[{"rounded-br":V()}],"rounded-bl":[{"rounded-bl":V()}],"border-w":[{border:q()}],"border-w-x":[{"border-x":q()}],"border-w-y":[{"border-y":q()}],"border-w-s":[{"border-s":q()}],"border-w-e":[{"border-e":q()}],"border-w-t":[{"border-t":q()}],"border-w-r":[{"border-r":q()}],"border-w-b":[{"border-b":q()}],"border-w-l":[{"border-l":q()}],"divide-x":[{"divide-x":q()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":q()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[..._e(),"hidden","none"]}],"divide-style":[{divide:[..._e(),"hidden","none"]}],"border-color":[{border:b()}],"border-color-x":[{"border-x":b()}],"border-color-y":[{"border-y":b()}],"border-color-s":[{"border-s":b()}],"border-color-e":[{"border-e":b()}],"border-color-t":[{"border-t":b()}],"border-color-r":[{"border-r":b()}],"border-color-b":[{"border-b":b()}],"border-color-l":[{"border-l":b()}],"divide-color":[{divide:b()}],"outline-style":[{outline:[..._e(),"none","hidden"]}],"outline-offset":[{"outline-offset":[y,f,u]}],"outline-w":[{outline:["",y,Te,ve]}],"outline-color":[{outline:b()}],shadow:[{shadow:["","none",h,We,Fe]}],"shadow-color":[{shadow:b()}],"inset-shadow":[{"inset-shadow":["none",z,We,Fe]}],"inset-shadow-color":[{"inset-shadow":b()}],"ring-w":[{ring:q()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:b()}],"ring-offset-w":[{"ring-offset":[y,ve]}],"ring-offset-color":[{"ring-offset":b()}],"inset-ring-w":[{"inset-ring":q()}],"inset-ring-color":[{"inset-ring":b()}],"text-shadow":[{"text-shadow":["none",C,We,Fe]}],"text-shadow-color":[{"text-shadow":b()}],opacity:[{opacity:[y,f,u]}],"mix-blend":[{"mix-blend":[...Ue(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":Ue()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[y]}],"mask-image-linear-from-pos":[{"mask-linear-from":L()}],"mask-image-linear-to-pos":[{"mask-linear-to":L()}],"mask-image-linear-from-color":[{"mask-linear-from":b()}],"mask-image-linear-to-color":[{"mask-linear-to":b()}],"mask-image-t-from-pos":[{"mask-t-from":L()}],"mask-image-t-to-pos":[{"mask-t-to":L()}],"mask-image-t-from-color":[{"mask-t-from":b()}],"mask-image-t-to-color":[{"mask-t-to":b()}],"mask-image-r-from-pos":[{"mask-r-from":L()}],"mask-image-r-to-pos":[{"mask-r-to":L()}],"mask-image-r-from-color":[{"mask-r-from":b()}],"mask-image-r-to-color":[{"mask-r-to":b()}],"mask-image-b-from-pos":[{"mask-b-from":L()}],"mask-image-b-to-pos":[{"mask-b-to":L()}],"mask-image-b-from-color":[{"mask-b-from":b()}],"mask-image-b-to-color":[{"mask-b-to":b()}],"mask-image-l-from-pos":[{"mask-l-from":L()}],"mask-image-l-to-pos":[{"mask-l-to":L()}],"mask-image-l-from-color":[{"mask-l-from":b()}],"mask-image-l-to-color":[{"mask-l-to":b()}],"mask-image-x-from-pos":[{"mask-x-from":L()}],"mask-image-x-to-pos":[{"mask-x-to":L()}],"mask-image-x-from-color":[{"mask-x-from":b()}],"mask-image-x-to-color":[{"mask-x-to":b()}],"mask-image-y-from-pos":[{"mask-y-from":L()}],"mask-image-y-to-pos":[{"mask-y-to":L()}],"mask-image-y-from-color":[{"mask-y-from":b()}],"mask-image-y-to-color":[{"mask-y-to":b()}],"mask-image-radial":[{"mask-radial":[f,u]}],"mask-image-radial-from-pos":[{"mask-radial-from":L()}],"mask-image-radial-to-pos":[{"mask-radial-to":L()}],"mask-image-radial-from-color":[{"mask-radial-from":b()}],"mask-image-radial-to-color":[{"mask-radial-to":b()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":T()}],"mask-image-conic-pos":[{"mask-conic":[y]}],"mask-image-conic-from-pos":[{"mask-conic-from":L()}],"mask-image-conic-to-pos":[{"mask-conic-to":L()}],"mask-image-conic-from-color":[{"mask-conic-from":b()}],"mask-image-conic-to-color":[{"mask-conic-to":b()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:Ie()}],"mask-repeat":[{mask:Ae()}],"mask-size":[{mask:je()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",f,u]}],filter:[{filter:["","none",f,u]}],blur:[{blur:Pe()}],brightness:[{brightness:[y,f,u]}],contrast:[{contrast:[y,f,u]}],"drop-shadow":[{"drop-shadow":["","none",S,We,Fe]}],"drop-shadow-color":[{"drop-shadow":b()}],grayscale:[{grayscale:["",y,f,u]}],"hue-rotate":[{"hue-rotate":[y,f,u]}],invert:[{invert:["",y,f,u]}],saturate:[{saturate:[y,f,u]}],sepia:[{sepia:["",y,f,u]}],"backdrop-filter":[{"backdrop-filter":["","none",f,u]}],"backdrop-blur":[{"backdrop-blur":Pe()}],"backdrop-brightness":[{"backdrop-brightness":[y,f,u]}],"backdrop-contrast":[{"backdrop-contrast":[y,f,u]}],"backdrop-grayscale":[{"backdrop-grayscale":["",y,f,u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[y,f,u]}],"backdrop-invert":[{"backdrop-invert":["",y,f,u]}],"backdrop-opacity":[{"backdrop-opacity":[y,f,u]}],"backdrop-saturate":[{"backdrop-saturate":[y,f,u]}],"backdrop-sepia":[{"backdrop-sepia":["",y,f,u]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":m()}],"border-spacing-x":[{"border-spacing-x":m()}],"border-spacing-y":[{"border-spacing-y":m()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",f,u]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[y,"initial",f,u]}],ease:[{ease:["linear","initial",M,f,u]}],delay:[{delay:[y,f,u]}],animate:[{animate:["none",A,f,u]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[x,f,u]}],"perspective-origin":[{"perspective-origin":E()}],rotate:[{rotate:me()}],"rotate-x":[{"rotate-x":me()}],"rotate-y":[{"rotate-y":me()}],"rotate-z":[{"rotate-z":me()}],scale:[{scale:be()}],"scale-x":[{"scale-x":be()}],"scale-y":[{"scale-y":be()}],"scale-z":[{"scale-z":be()}],"scale-3d":["scale-3d"],skew:[{skew:Re()}],"skew-x":[{"skew-x":Re()}],"skew-y":[{"skew-y":Re()}],transform:[{transform:[f,u,"","none","gpu","cpu"]}],"transform-origin":[{origin:E()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:ze()}],"translate-x":[{"translate-x":ze()}],"translate-y":[{"translate-y":ze()}],"translate-z":[{"translate-z":ze()}],"translate-none":["translate-none"],accent:[{accent:b()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:b()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",f,u]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":m()}],"scroll-mx":[{"scroll-mx":m()}],"scroll-my":[{"scroll-my":m()}],"scroll-ms":[{"scroll-ms":m()}],"scroll-me":[{"scroll-me":m()}],"scroll-mt":[{"scroll-mt":m()}],"scroll-mr":[{"scroll-mr":m()}],"scroll-mb":[{"scroll-mb":m()}],"scroll-ml":[{"scroll-ml":m()}],"scroll-p":[{"scroll-p":m()}],"scroll-px":[{"scroll-px":m()}],"scroll-py":[{"scroll-py":m()}],"scroll-ps":[{"scroll-ps":m()}],"scroll-pe":[{"scroll-pe":m()}],"scroll-pt":[{"scroll-pt":m()}],"scroll-pr":[{"scroll-pr":m()}],"scroll-pb":[{"scroll-pb":m()}],"scroll-pl":[{"scroll-pl":m()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",f,u]}],fill:[{fill:["none",...b()]}],"stroke-w":[{stroke:[y,Te,ve,nt]}],stroke:[{stroke:["none",...b()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},Lo=ho(To);async function Pt(e){return new Promise((t,r)=>{const o=new Image;o.src=e,o.onload=()=>{const n=document.createElement("canvas"),s=n.getContext("2d");if(!s)return r(new Error("Failed to get 2d canvas context."));n.width=o.naturalWidth,n.height=o.naturalHeight,s.drawImage(o,0,0);const a=s.getImageData(0,0,n.width,n.height);t(a)},o.onerror=r})}function vt(...e){return Lo(Lr(e))}var Go=J("<button><!></button>");function mt(e,t){ee(t,!0);let r=fe(t,["$$slots","$$events","$$legacy","class","children","disabled"]);const o="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium outline-none transition-all focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0";var n=Go();lt(n,a=>({class:a,disabled:t.disabled,...r}),[()=>vt(o,t.class)]);var s=j(n);se(s,()=>t.children??ie),G(n),$(e,n),te()}var Oo=J('<span data-slot="badge"><!></span>');function st(e,t){ee(t,!0);const r="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-md border px-2 py-0.5 text-xs font-medium transition-[color,box-shadow] focus-visible:ring-[3px] [&>svg]:pointer-events-none [&>svg]:size-3";var o=Oo(),n=j(o);se(n,()=>t.children??ie),G(o),xe(s=>Or(o,1,s),[()=>Gr(vt(r,t.class))]),$(e,o),te()}var jo=J('<!> <!> <span class="sr-only">Toggle theme</span>',1);function Uo(e,t){ee(t,!0);{let r=Oe(()=>vt("size-9 hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",t.class));mt(e,{get class(){return c(r)},get onclick(){return jr},children:(o,n)=>{var s=jo(),a=K(s);eo(a,{class:"size-5 rotate-0 scale-100 !transition-all dark:-rotate-90 dark:scale-0"});var l=D(a,2);Zr(l,{class:"absolute size-5 rotate-90 scale-0 !transition-all dark:rotate-0 dark:scale-100"}),Ce(2),$(o,s)},$$slots:{default:!0}})}te()}function Vo(e){return new Worker(""+new URL("../workers/pixelize-worker-D4fF_64J.js",import.meta.url).href,{name:e?.name})}var Do=J('<img alt="original" class="max-w-full max-h-full object-contain"/>'),Fo=J('<p class="text-muted-foreground text-sm mt-1">이미지를 드래그 앤 드롭 또는 클릭해서 선택</p>'),Wo=J(`<canvas class="object-contain w-full h-full" style="image-rendering: pixelated;
                  image-rendering: -moz-crisp-edges;
                  image-rendering: crisp-edges;"></canvas>`),Bo=J('<div class="text-center p-4"><!></div>'),Ho=J('<div class="text-center p-4"><!></div>'),qo=J("<!> <!>",1),Xo=J('<h2 class="text-2xl font-bold">팔레트</h2>'),Jo=J('<h2 class="text-2xl font-bold"> </h2> <button><!></button>',1),Yo=J('<div class="rounded-full size-6 border-2 border-border"></div>'),Ko=J('<div class="p-4 flex flex-wrap gap-3"></div>'),Zo=J('<div class="flex items-center justify-center h-full text-muted-foreground text-sm"><p>사용할 팔레트를 로드하세요.</p></div>'),Qo=J(`<div class="relative flex flex-col items-center justify-center min-h-screen p-4"><header class="flex items-center text-center mb-4 gap-4"><!> <h1 class="text-4xl font-black tracking-tighter">PIXELIZER</h1></header> <main class="w-full max-w-7xl flex flex-col items-center flex-grow gap-4"><div class="w-full grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-6"><div class="relative aspect-square flex items-center justify-center border-2 border-dashed"><input class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" id="original" name="original" type="file" accept="image/png"/> <!> <!></div> <div class="flex flex-col items-center gap-2 w-full lg:w-auto px-4 py-8"><div class="w-full max-w-[200px]"><div class="flex justify-between items-center mb-2"><label for="pixel-size" class="flex-grow text-sm font-medium text-muted-foreground">픽셀 사이즈</label> <input class="w-12 text-center border" type="number" min="1" max="64"/></div> <input class="appearance-none bg-foreground/30 rounded-lg h-2
                        [&amp;::-webkit-slider-thumb]:appearance-none
                        [&amp;::-webkit-slider-thumb]:rounded-xl
                        [&amp;::-webkit-slider-thumb]:size-4
                        [&amp;::-webkit-slider-thumb]:bg-foreground/70" id="pixel-size" type="range" min="1" max="64"/></div> <!> <!></div> <div class="relative aspect-square flex flex-col items-center justify-center border-2 border-dashed"><!> <!></div></div> <div class="w-full flex flex-col gap-2"><div class="flex items-center gap-4"><!> <!></div> <div class="relative flex min-h-28 border rounded-2xl justify-center items-center"><input class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" type="file" accept="image/png"/> <!></div></div></main></div>`);function na(e,t){ee(t,!0);let r=Q(void 0),o=Q(void 0),n=Q(null),s=Q(null),a=Q("");const l=Oe(()=>c(o)?.length!==0);et(()=>{if(c(o)===void 0||c(o).length===0){R(a,""),R(n,null),R(s,null),R(i,null);return}R(s,null),R(i,null);const d=c(o)[0];R(n,d,!0);const w=URL.createObjectURL(d);R(a,w,!0);async function P(){const I=await Pt(w);c(n)===d&&R(s,I,!0)}return P(),()=>{URL.revokeObjectURL(w)}});let i=Q(null),g=Q(16),h=Q(null),z=Q(!1);async function C(){if(R(i,null),c(s)&&c(r)&&!c(z)){R(z,!0);const d={imageData:c(s),pixelSize:c(g),palette:Dr(c(S))};c(r).postMessage(d)}}et(()=>{if(c(h)&&c(i)){const d=c(h).getContext("2d");c(h).width=c(i).width,c(h).height=c(i).height,d&&d.putImageData(c(i),0,0)}});let S=Q(Nr([])),p=Q(void 0),x=Q(void 0);const _=new Hr;function M(){R(S,[],!0),R(p,void 0),c(x)&&(c(x).value="")}et(()=>{if(c(p)===void 0||c(p).length===0)return M();const d=c(p)[0],w=URL.createObjectURL(d);async function P(){try{const I=await Pt(w);R(S,_.extract(I),!0)}finally{URL.revokeObjectURL(w)}}P()});function A(){c(h)&&c(h).toBlob(d=>{if(!d){console.error("blob data failed");return}if(c(n)&&c(i)){const w=URL.createObjectURL(d),P=document.createElement("a");P.href=w,P.download=`Converted_${c(i).width}x${c(i).height}_${c(n).name}`,P.click(),URL.revokeObjectURL(w)}},"image/png")}Tr(()=>(R(r,new Vo,!0),c(r).onmessage=d=>{R(i,d.data,!0),R(z,!1)},()=>{c(r)?.terminate()}));var N=Qo(),T=j(N),E=j(T);Uo(E,{class:"absolute left-10"}),Ce(2),G(T);var v=D(T,2),k=j(v),m=j(k),U=j(m),re=D(U,2);{var Z=d=>{var w=Do();xe(()=>zt(w,"src",c(a))),$(d,w)},F=d=>{var w=Fo();$(d,w)};pe(re,d=>{c(a)?d(Z):d(F,!1)})}var le=D(re,2);{var ce=d=>{st(d,{class:"absolute left-1 bottom-1 opacity-20 hover:opacity-60",children:(w,P)=>{Ce();var I=Ve();xe(()=>De(I,`${c(s).width??""} X ${c(s).height??""}`)),$(w,I)},$$slots:{default:!0}})};pe(le,d=>{c(s)&&d(ce)})}G(m);var H=D(m,2),W=j(H),Y=j(W),b=D(j(Y),2);_t(b),G(Y);var Ie=D(Y,2);_t(Ie),G(W);var Ae=D(W,2);{let d=Oe(()=>c(s)?"visible":"invisible");st(Ae,{get class(){return c(d)},children:(w,P)=>{Ce();var I=Ve();xe(X=>De(I,X),[()=>c(s)?`${Math.floor(c(s).width/c(g))} X ${Math.floor(c(s).height/c(g))}`:"none X none"]),$(w,I)},$$slots:{default:!0}})}var je=D(Ae,2);{let d=Oe(()=>!c(l)||c(z));mt(je,{class:"h-9 px-4 py-2 bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",onclick:C,get disabled(){return c(d)},children:(w,P)=>{Ce();var I=Ve("변환");$(w,I)},$$slots:{default:!0}})}G(H);var ke=D(H,2),V=j(ke);{var q=d=>{var w=Wo();Mt(w,P=>R(h,P),()=>c(h)),$(d,w)},_e=d=>{var w=ne(),P=K(w);{var I=oe=>{var de=Bo(),Ye=j(de);Yr(Ye,{class:"mx-auto size-12 text-muted-foreground"}),G(de),$(oe,de)},X=oe=>{var de=ne(),Ye=K(de);{var nr=Ke=>{var Ze=Ho(),sr=j(Ze);Kr(sr,{class:"mx-auto size-12 text-muted-foreground animate-spin"}),G(Ze),$(Ke,Ze)};pe(Ye,Ke=>{c(z)&&Ke(nr)},!0)}$(oe,de)};pe(P,oe=>{c(z)?oe(X,!1):oe(I)},!0)}$(d,w)};pe(V,d=>{c(i)?d(q):d(_e,!1)})}var Ue=D(V,2);{var L=d=>{var w=qo(),P=K(w);st(P,{class:"absolute left-1 bottom-1 opacity-20 hover:opacity-60",children:(X,oe)=>{Ce();var de=Ve();xe(()=>De(de,`${c(i).width??""} X ${c(i).height??""}`)),$(X,de)},$$slots:{default:!0}});var I=D(P,2);mt(I,{class:`absolute right-1 bottom-1 size-9
                         hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50`,onclick:A,children:(X,oe)=>{Jr(X,{})},$$slots:{default:!0}}),$(d,w)};pe(Ue,d=>{c(i)&&d(L)})}G(ke),G(k);var Pe=D(k,2),me=j(Pe),be=j(me);Qr(be,{class:"size-6"});var Re=D(be,2);{var ze=d=>{var w=Xo();$(d,w)},tr=d=>{var w=Jo(),P=K(w),I=j(P);G(P);var X=D(P,2);X.__click=M;var oe=j(X);to(oe,{}),G(X),xe(()=>De(I,`팔레트 ${c(S).length??""}개 로드`)),$(d,w)};pe(Re,d=>{c(S).length===0?d(ze):d(tr,!1)})}G(me);var xt=D(me,2),Je=j(xt);Mt(Je,d=>R(x,d),()=>c(x));var rr=D(Je,2);{var or=d=>{var w=Ko();Ft(w,21,()=>c(S),Dt,(P,I)=>{var X=Yo();xe(()=>{Ur(X,`background-color: rgb(${c(I).r??""}, ${c(I).g??""}, ${c(I).b??""})`),zt(X,"title",`rgb(${c(I).r??""}, ${c(I).g??""}, ${c(I).b??""})`)}),$(P,X)}),G(w),$(d,w)},ar=d=>{var w=Zo();$(d,w)};pe(rr,d=>{c(S).length>0?d(or):d(ar,!1)})}G(xt),G(Pe),G(v),G(N),Ct(U,()=>c(o),d=>R(o,d)),$t(b,()=>c(g),d=>R(g,d)),$t(Ie,()=>c(g),d=>R(g,d)),Ct(Je,()=>c(p),d=>R(p,d)),$(e,N),te()}Rr(["click"]);export{na as component};
