import{k as T,b as R,U as S,c as _,A as y,l as O,m as b,n as d,W as A,H as v}from"./ddd@DwDq534T.js";class W extends T{constructor(e,l,t,r){super(),this.scene=e,this.camera=l,this.sampleLevel=4,this.unbiased=!0,this.clearColor=t!==void 0?t:0,this.clearAlpha=r!==void 0?r:0,this._oldClearColor=new R;const h=d;this.copyUniforms=S.clone(h.uniforms),this.copyMaterial=new _({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,premultipliedAlpha:!0,blending:y}),this.fsQuad=new O(this.copyMaterial),this.copy_pass=new b(d)}dispose(){this.sampleRenderTarget&&(this.sampleRenderTarget.dispose(),this.sampleRenderTarget=null),this.copyMaterial.dispose(),this.fsQuad.dispose()}setSize(e,l){this.sampleRenderTarget&&this.sampleRenderTarget.setSize(e,l)}render(e,l,t,r,h,p){const n=p.effect_composer;this.sampleRenderTarget||(this.sampleRenderTarget=new A(t.width,t.height,{type:v}),this.sampleRenderTarget.texture.name="SSAARenderPass.sample");const o=x[Math.max(0,Math.min(this.sampleLevel,5))],m=e.autoClear;e.autoClear=!1,e.getClearColor(this._oldClearColor);const g=e.getClearAlpha(),u=1/o.length,C=1/32;this.copyUniforms.tDiffuse.value=this.sampleRenderTarget.texture;const i={fullWidth:t.width,fullHeight:t.height,offsetX:0,offsetY:0,width:t.width,height:t.height},s=Object.assign({},this.camera.view);s.enabled&&Object.assign(i,s);for(let a=0;a<o.length;a++){const f=o[a];this.camera.setViewOffset&&this.camera.setViewOffset(i.fullWidth,i.fullHeight,i.offsetX+f[0]*.0625,i.offsetY+f[1]*.0625,i.width,i.height);let c=u;if(this.unbiased){const w=-.5+(a+.5)/o.length;c+=C*w}this.copyUniforms.opacity.value=c,e.setClearColor(this.clearColor,this.clearAlpha),a===0?e.setRenderTarget(n.renderTarget3):e.setRenderTarget(this.sampleRenderTarget),e.clear(),window.DMC.start_gpu_status_check(),e.render(this.scene,this.camera),this.outline_effect&&this.outline_effect.render(this.scene,this.camera),window.DMC.end_gpu_status_check(),a===0&&this.copy_pass.render(e,this.sampleRenderTarget,n.renderTarget3),e.setRenderTarget(this.renderToScreen?null:l),a===0&&(e.setClearColor(0,0),e.clear()),this.fsQuad.render(e)}this.camera.setViewOffset&&s.enabled?this.camera.setViewOffset(s.fullWidth,s.fullHeight,s.offsetX,s.offsetY,s.width,s.height):this.camera.clearViewOffset&&this.camera.clearViewOffset(),e.autoClear=m,e.setClearColor(this._oldClearColor,g)}}const x=[[[0,0]],[[4,4],[-4,-4]],[[-2,-6],[6,-2],[-6,2],[2,6]],[[1,-3],[-1,3],[5,1],[-3,-5],[-5,5],[-7,-1],[3,7],[7,-7]],[[1,1],[-1,-3],[-3,2],[4,-1],[-5,-2],[2,5],[5,3],[3,-5],[-2,6],[0,-7],[-4,-6],[-6,4],[-8,0],[7,-4],[6,7],[-7,-8]],[[-4,-7],[-7,-5],[-3,-5],[-5,-4],[-1,-4],[-2,-2],[-6,-1],[-4,0],[-7,1],[-1,2],[-6,3],[-3,3],[-7,6],[-3,6],[-5,7],[-1,7],[5,-7],[1,-6],[6,-5],[4,-4],[2,-3],[7,-2],[1,-1],[4,-1],[2,1],[6,2],[0,4],[4,4],[2,5],[7,5],[5,6],[3,7]]];export{W as SSAARenderPass};