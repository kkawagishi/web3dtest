import{o as h,bz as E,G as y}from"./ddd@DwDq534T.js";const d=new h,i={type:"",data:d},m=new E;class b extends y{listenToPointerEvents(n,l){const v=this,s=new E,e=n.domElement;function t(o){o.stopPropagation();const c=n.domElement.getBoundingClientRect();d.x=(o.clientX-c.left)/c.width*2-1,d.y=-(o.clientY-c.top)/c.height*2+1,s.setFromCamera(d,l);const a=s.intersectObjects(v.children,!1);if(a.length>0){const r=a[0],u=r.object,p=r.uv;i.type=o.type,i.data.set(p.x,1-p.y),u.dispatchEvent(i)}}e.addEventListener("pointerdown",t),e.addEventListener("pointerup",t),e.addEventListener("pointermove",t),e.addEventListener("mousedown",t),e.addEventListener("mouseup",t),e.addEventListener("mousemove",t),e.addEventListener("click",t)}listenToXRControllerEvents(n){const l=this,v={move:"mousemove",select:"click",selectstart:"mousedown",selectend:"mouseup"};function s(e){const t=e.target;m.setFromXRController(t);const o=m.intersectObjects(l.children,!1);if(o.length>0){const c=o[0],a=c.object,r=c.uv;i.type=v[e.type],i.data.set(r.x,1-r.y),a.dispatchEvent(i)}}n.addEventListener("move",s),n.addEventListener("select",s),n.addEventListener("selectstart",s),n.addEventListener("selectend",s)}}export{b as InteractiveGroup};