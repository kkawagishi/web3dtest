import{aw as nt,R as ct,ax as ft,ay as Ct,az as _t,aA as it,aB as mt,aC as dt}from"./ddd@DwDq534T.js";class At extends nt{constructor(m){super(m)}parse(m,B){const t={mipmaps:[],width:0,height:0,format:null,mipmapCount:1},E=542327876,l=131072,R=512,I=1024,M=2048,F=4096,P=8192,U=16384,G=32768,g=95,X=96;function d(o){return o.charCodeAt(0)+(o.charCodeAt(1)<<8)+(o.charCodeAt(2)<<16)+(o.charCodeAt(3)<<24)}function b(o){return String.fromCharCode(o&255,o>>8&255,o>>16&255,o>>24&255)}function w(o,a,n,D){const _=n*D*4,r=new Uint8Array(o,a,_),i=new Uint8Array(_);let c=0,f=0;for(let S=0;S<D;S++)for(let u=0;u<n;u++){const et=r[f];f++;const at=r[f];f++;const rt=r[f];f++;const st=r[f];f++,i[c]=rt,c++,i[c]=at,c++,i[c]=et,c++,i[c]=st,c++}return i}const O=d("DXT1"),k=d("DXT3"),y=d("DXT5"),L=d("ETC1"),H=d("DX10"),A=31,h=5,N=0,V=1,z=2,Y=3,Z=4,j=7,q=21,J=22,K=23,Q=24,W=25,$=26,v=28,tt=0,e=new Int32Array(m,0,A);if(e[N]!==E)return console.error("THREE.DDSLoader.parse: Invalid magic number in DDS header."),t;let s;const T=e[q];let x=!1,p=e[V]+4;switch(T){case O:s=8,t.format=dt;break;case k:s=16,t.format=mt;break;case y:s=16,t.format=it;break;case L:s=8,t.format=_t;break;case H:p+=h*4;const a=new Int32Array(m,(A+1)*4,h)[tt];switch(a){case X:{s=16,t.format=Ct;break}case g:{s=16,t.format=ft;break}default:return console.error("THREE.DDSLoader.parse: Unsupported DXGI_FORMAT code ",a),t}break;default:if(e[J]===32&&e[K]&16711680&&e[Q]&65280&&e[W]&255&&e[$]&4278190080)x=!0,s=64,t.format=ct;else return console.error("THREE.DDSLoader.parse: Unsupported FourCC code ",b(T)),t}t.mipmapCount=1,e[z]&l&&B!==!1&&(t.mipmapCount=Math.max(1,e[j]));const C=e[v];if(t.isCubemap=!!(C&R),t.isCubemap&&(!(C&I)||!(C&M)||!(C&F)||!(C&P)||!(C&U)||!(C&G)))return console.error("THREE.DDSLoader.parse: Incomplete cubemap faces"),t;t.width=e[Z],t.height=e[Y];const ot=t.isCubemap?6:1;for(let o=0;o<ot;o++){let a=t.width,n=t.height;for(let D=0;D<t.mipmapCount;D++){let _,r;x?(_=w(m,p,a,n),r=_.length):(r=Math.max(4,a)/4*Math.max(4,n)/4*s,_=new Uint8Array(m,p,r));const i={data:_,width:a,height:n};t.mipmaps.push(i),p+=r,a=Math.max(a>>1,1),n=Math.max(n>>1,1)}}return t}}export{At as DDSLoader};