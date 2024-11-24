var V=Object.defineProperty;var N=(p,o,i)=>o in p?V(p,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):p[o]=i;var c=(p,o,i)=>N(p,typeof o!="symbol"?o+"":o,i);import"./modulepreload-polyfill-B5Qt9EMX.js";import{O as X}from"./OutlinePass-A4ISMQsg.js";import{c as Y,d as H,e as W,M as F,f as l,B as Z,g as q,O as K,h as Q,R as U,V as k,i as $,E as tt,C as et,F as st,a as z,S as it,b as nt,P as ot}from"./GLTFLoader-wlXMjBjz.js";import{I as rt,s as at,a as ct,c as lt,r as pt,o as dt,b as ht,d as gt,e as ut,f as mt,h as ft}from"./ImprovedNoise-DKX4s_KG.js";import{C as u}from"./tiles-DzyDbYKX.js";import{E as yt,R as vt,A as wt,S as bt,D as Ct,O as jt}from"./AfterimagePass-Cyi6sy9e.js";function J(p,{color:o=65280,materialShader:i="standard",radius:e=1,computeBounds:n=!1,autoAdd:s=!1}={}){const r=new Y(e,12,12);let a;i==="basic"?a=new H({color:o}):i==="standard"&&(a=new W({color:o}));const d=new F(r,a);return n&&(d.geometry.computeBoundingBox(),d.geometry.computeBoundingSphere()),s&&p.add(d),d}const h=new l,E=new l,R=new l,Pt=new l(0,1,0),xt=new l(0,-1,0);class St extends F{constructor({radius:i=1}={}){const e=new Z,n=[new l(-1,1,1),new l(1,1,1),new l(1,1,-1),new l(-1,1,-1)],s=[new l(-1,-1,1),new l(1,-1,1),new l(1,-1,-1),new l(-1,-1,-1)],r=new Float32Array([...n[0],...n[1],...n[2],...n[3],...s[0],...s[1],...s[2],...s[3]]),a=[0,1,2,2,3,0,7,6,5,5,4,7,5,6,2,2,1,5,7,4,0,0,3,7,4,5,1,1,0,4,6,7,3,3,2,6];e.setIndex(a),e.setAttribute("position",new q(r,3));const d=new W({color:16711680,wireframe:!0});super(e,d);c(this,"p0",new l(0,1,0));c(this,"p1",new l(0,-1,0));c(this,"radius",1);c(this,"driver0",null);c(this,"driver1",null);c(this,"top",[]);c(this,"bottom",[]);this.geometry.computeVertexNormals(),this.top=n,this.bottom=s,this.radius=i,this.update()}update(){const i=this.geometry.getAttribute("position");this.driver0&&this.driver1&&(this.p0.copy(this.driver0.position),this.p1.copy(this.driver1.position)),E.copy(this.p0).sub(this.p1).normalize();const e=Pt.angleTo(E);R.copy(this.p1).sub(this.p0).normalize();const n=xt.angleTo(R);for(var s=0;s<this.top.length;s++)h.x=this.top[s].x,h.z=this.top[s].z,h.y=0,h.applyAxisAngle(new l(0,0,-1),-e),h.setLength(this.radius).add(this.p0),i.setXYZ(s,h.x,h.y,h.z);for(var s=0;s<this.bottom.length;s++)h.x=this.bottom[s].x,h.z=this.bottom[s].z,h.y=0,h.applyAxisAngle(new l(0,0,-1),-n),h.setLength(this.radius).add(this.p1),i.setXYZ(s+4,h.x,h.y,h.z);i.needsUpdate=!0}}class Lt extends K{constructor({jointRadius:i=.4,stickRadius:e=.4}={}){super();c(this,"joints",new u);c(this,"sticks",new u);this.addJoint([0,0,0],i,e)}addJoint(i,e,n=1){let s=J(i);if(this.add(s),s.position.fromArray(i),s.scale.setScalar(e),s.geometry.computeBoundingBox(),s.geometry.computeBoundingSphere(),this.joints.add(s),this.joints.length>1){let r=new St({radius:n});this.add(r),this.sticks.add(r),r.driver0=this.joints[this.joints.length-2],r.driver1=this.joints[this.joints.length-1]}this.update()}update(){for(var i=0;i<this.sticks.length;i++)this.sticks[i].update()}}const M=new l;new l;class At{constructor(o){c(this,"position",new l);c(this,"velocity",new l);c(this,"mass",2);c(this,"gravity",new l(0,.8349054,0));c(this,"stiffness",.2);c(this,"damping",.495);c(this,"pointer",null);const{positionA:i,mass:e=2,gravityA:n=[0,.8349054,0],stiffness:s=.2,damping:r=.495}=o;this.position.fromArray(i),this.mass=e,this.gravity.fromArray(n),this.stiffness=s,this.damping=r}update(o){M.copy(o).sub(this.position).multiplyScalar(this.stiffness),M.add(this.gravity);const i=M.divideScalar(this.mass);this.velocity.add(i).multiplyScalar(this.damping),this.position.add(this.velocity)}}class kt{constructor(o){c(this,"pointer",null);c(this,"gravity",.8);c(this,"mass",2);c(this,"springs",new u);const{pointer:i=null,autoBuild:e=!0,gravity:n=-.8,mass:s=2,stiffness:r=.2,damping:a=.495}=o;if(this.pointer=i,this.gravity=n,this.mass=s,this.stiffness=r,this.damping=a,e&&i)for(var d=0;d<this.pointer.joints.length;d++)this.addSpring(this.pointer.joints[d].position.toArray())}addSpring(){}update(){}}const x=new l,S=new l,L=new l;class Mt extends kt{constructor(i){super(i);c(this,"pinnedJoints",new u);c(this,"draggingJoints",new u);c(this,"targetJoint",null);c(this,"initalLengths",new u);for(var e=0;e<this.pointer.joints.length-1;e++)this.initalLengths.add(this.pointer.joints[e].position.distanceTo(this.pointer.joints[e+1].position)),console.log(this.initalLengths[e])}addSpring(i=[0,0,0]){this.springs.add(new At({positionA:i,gravityA:[0,this.gravity,0],mass:this.mass,stiffness:this.stiffness,damping:this.damping}))}addPinned(i){this.pinnedJoints.add(i)}addDragging(i){this.draggingJoints.includes(i)||this.draggingJoints.add(i)}removeDragging(i){this.draggingJoints.remove(i)}setTargetJoint(i){this.targetJoint=i}update(){if(!this.pointer){console.warn("missing pointer object");return}const i=this.pointer.joints.indexOf(this.targetJoint);i===-1&&(this.targetJoint=this.pointer.joints[0]),i>-1&&(this.springs[i].position.copy(this.pointer.joints[i].position),this.springs[i].velocity.setScalar(0));for(var e=i+1;e<this.springs.length;e++)if(!this.pinnedJoints.includes(this.pointer.joints[e])&&!this.draggingJoints.includes(this.pointer.joints[e])){const n=this.springs[e],s=this.springs[e-1];x.copy(n.position).sub(s.position),L.copy(x).normalize().multiplyScalar(this.initalLengths[e-1]).add(s.position),n.update(s.position),S.copy(n.position).sub(s.position),S.length()<=this.initalLengths[e-1]&&(n.position.copy(L),n.velocity.setScalar(0)),this.pointer.joints[e].position.copy(this.springs[e].position)}else this.springs[e].position.copy(this.pointer.joints[e].position),this.springs[e].velocity.setScalar(0);for(var e=i-1;e>-1;e--)if(!this.pinnedJoints.includes(this.pointer.joints[e])&&!this.draggingJoints.includes(this.pointer.joints[e])){const s=this.springs[e],r=this.springs[e+1];x.copy(s.position).sub(r.position),L.copy(x).normalize().multiplyScalar(this.initalLengths[e+1]).add(r.position),s.update(r.position),S.copy(s.position).sub(r.position),S.length()<=this.initalLengths[e+1]&&(s.position.copy(L),s.velocity.setScalar(0)),this.pointer.joints[e].position.copy(this.springs[e].position)}else this.springs[e].position.copy(this.pointer.joints[e].position),this.springs[e].velocity.setScalar(0);this.pointer.update()}}const w=new l;class Bt{constructor({position:o=new l,mass:i=2,k:e=.2,damping:n=.495,restLength:s=0,pointer:r=null}){c(this,"position",new l);c(this,"velocity",new l);c(this,"mass");c(this,"_k");c(this,"damping");c(this,"restLength");c(this,"pointer");c(this,"acceleration",new l);this.position.copy(o),this.mass=i,this._k=e,this.damping=n,this.restLength=s,this.pointer=r}applyForce(o){w.copy(o).divideScalar(this.mass),this.acceleration.add(w)}update(o){w.copy(this.position).sub(o);const e=w.length()-this.restLength;w.normalize().multiplyScalar(-1*this._k*e),this.applyForce(w)}applyAll(){this.velocity.add(this.acceleration).multiplyScalar(this.damping),this.position.add(this.velocity),this.acceleration.setScalar(0)}remoteControl(o){this.position.copy(o),this.velocity.setScalar(0),this.acceleration.setScalar(0)}}class Jt{constructor({pointer:o,anchor:i,position:e,mass:n,k:s,damping:r,restLength:a,gravity:d=new l}){c(this,"spring");c(this,"pointer");c(this,"anchor");c(this,"gravity",new l);this.pointer=o,this.anchor=i,this.gravity.copy(d),this.spring=new Bt({position:e,mass:n,k:s,damping:r,restLength:a,pointer:o})}update(){this.pointer.isDragging?this.spring.remoteControl(this.pointer.position):(this.spring.applyForce(this.gravity),this.spring.update(this.anchor.position),this.spring.applyAll(),this.pointer.position.copy(this.spring.position))}}const b=new Q,y=new U,C=new k,_=new l,A=new l,B=new l,I=new $;class Ft extends tt{constructor(o,i,e){super(),e.style.touchAction="none";let n=null,s=null;const r=[],a=this;function d(){e.addEventListener("pointermove",D),e.addEventListener("pointerdown",O),e.addEventListener("pointerup",P),e.addEventListener("pointerleave",P)}function v(){e.removeEventListener("pointermove",D),e.removeEventListener("pointerdown",O),e.removeEventListener("pointerup",P),e.removeEventListener("pointerleave",P),e.style.cursor=""}function j(){v()}function m(){return o}function G(){return y}function D(f){if(a.enabled!==!1){if(T(f),y.setFromCamera(C,i),n){y.ray.intersectPlane(b,A)&&n.position.copy(A.sub(_).applyMatrix4(I)),a.dispatchEvent({type:"drag",object:n});return}if(f.pointerType==="mouse"||f.pointerType==="pen")if(r.length=0,y.setFromCamera(C,i),y.intersectObjects(o,a.recursive,r),r.length>0){const g=r[0].object;b.setFromNormalAndCoplanarPoint(i.getWorldDirection(b.normal),B.setFromMatrixPosition(g.matrixWorld)),s!==g&&s!==null&&(a.dispatchEvent({type:"hoveroff",object:s}),e.style.cursor="auto",s=null),s!==g&&(a.dispatchEvent({type:"hoveron",object:g}),e.style.cursor="pointer",s=g)}else s!==null&&(a.dispatchEvent({type:"hoveroff",object:s}),e.style.cursor="auto",s=null)}}function O(f){a.enabled!==!1&&(T(f),r.length=0,y.setFromCamera(C,i),y.intersectObjects(o,a.recursive,r),r.length>0&&(n=a.transformGroup===!0?o[0]:r[0].object,b.setFromNormalAndCoplanarPoint(i.getWorldDirection(b.normal),B.setFromMatrixPosition(n.matrixWorld)),y.ray.intersectPlane(b,A)&&(I.copy(n.parent.matrixWorld).invert(),_.copy(A).sub(B.setFromMatrixPosition(n.matrixWorld))),e.style.cursor="move",a.dispatchEvent({type:"dragstart",object:n})))}function P(){a.enabled!==!1&&(n&&(a.dispatchEvent({type:"dragend",object:n}),n=null),e.style.cursor=s?"pointer":"auto")}function T(f){const g=e.getBoundingClientRect();C.x=(f.clientX-g.left)/g.width*2-1,C.y=-(f.clientY-g.top)/g.height*2+1}d(),this.enabled=!0,this.recursive=!0,this.transformGroup=!1,this.activate=d,this.deactivate=v,this.dispose=j,this.getObjects=m,this.getRaycaster=G}}const t={animationPool:new u,gameTime:new et,viewFrustum:new st,usePostProcessing:!1,camera:null,orbitControl:null,mouseDelta:new k,mouse:new k,raycaster:new U,firstColor:new z().setHex(16735419),seconistColor:new z().setHex(16774236),noise1:new rt,modelsCache:new u,pickables:new u,draggingItems:new u};async function Dt(){at(t,{color:16747183}),ct(t,t.scene),lt(t,{position:[0,0,10]}),pt(t,{antialias:!0}),t.renderer.autoClear=!1,dt(t,t.camera,t.renderer),t.orbitControl.enableDamping=!0,t.orbitControl.dampingFactor=.12;const o=document.getElementById("threedee1").getBoundingClientRect();t.orthographicCamera=new ht(t,{rect:o,near:1,far:1e3});{t.wallpaperScene=new it;const n=new nt({uniforms:{u_time:{value:0}},vertexShader:`
        varying vec2 vUv;
        
        void main() {
            vUv = uv;
            gl_Position = vec4( position, 1.0 );    
        }
      `,fragmentShader:`
        varying vec2 vUv;
        uniform float u_time;
         
        void main() {
          // vec4 color = vec4( 0.0, vUv.x, vUv.y, 1.0 );
          // basic color strobe effect from shadertoy default with tweaks
          vec4 color = vec4(0.5 + 0.5*cos(u_time+vUv.xyx+vec3(0,2,4)), 1.0);
          gl_FragColor = color;
        }
      `});n.depthWrite=!1;const s=new ot(2,2),r=new F(s,n);r.position.z=0,t.wallpaperScene.add(r),t.backgroundPlane=r}t.ambientLight1=gt(t.scene),t.sunlight=ut(t.scene);{let r=function(a){a.preventDefault(),console.log("clicky");const d=t.dragControls.getObjects(),v=t.mouse;v.x=a.clientX/window.innerWidth*2-1,v.y=-(a.clientY/window.innerHeight)*2+1,t.raycaster.setFromCamera(v,t.camera);const j=t.raycaster.intersectObjects(t.pickables,!1);if(j.length>0){console.log("have!?");const m=j[0].object;console.log(m),d.push(m),t.draggingItems.add(m),t.chainModel_1.draggingJoints.add(m),t.chainModel_1.setTargetJoint(m),m===t.springball&&(t.springball.isDragging=!0)}},n=new Lt({jointRadius:.2,stickRadius:.1});n.position.y=2,t.scene.add(n);let s=10;for(var i=1;i<s;i++)n.addJoint([0,i*-1,0],.2,.1);t.chainModel_1=new Mt({pointer:n,stiffness:.1,mass:1.7,gravity:-0,damping:.701}),t.animationPool.add(t.chainModel_1),t.chainModel_1.addPinned(n.joints[0]),t.pickables.add(...n.joints);{const a=J(t.scene,{color:7086762,radius:.3,computeBounds:!0,autoAdd:!0});a.position.y=5,t.pickables.add(a),t.springball=J(t.scene,{color:7101695,radius:.7,computeBounds:!0,autoAdd:!0}),t.springball.position.y=4,t.pickables.add(t.springball);const d=new l(0,-.084387,0);t.coil_1=new Jt({pointer:t.springball,anchor:a,position:t.springball.position,mass:2.47,k:.2,damping:.84,restLength:a.position.distanceTo(t.springball.position),gravity:d}),t.animationPool.add(t.coil_1)}t.dragControls=new Ft([...t.pickables],t.camera,t.renderer.domElement),t.dragControls.rotateSpeed=2,t.dragControls.addEventListener("dragstart",function(a){t.orbitControl.enabled=!1,console.log("when start???")}),t.dragControls.addEventListener("drag",function(a){n.update()}),t.dragControls.addEventListener("dragend",function(a){t.orbitControl.enabled=!0,console.log("Oh stop???"),t.draggingItems.length=0,t.chainModel_1.draggingJoints.length=0,t.springball.isDragging=!1}),document.addEventListener("pointerdown",r)}mt(t,t.camera,t.renderer),ft(t,t.camera),Ot(t);function e(){requestAnimationFrame(e),t.orbitControl!==void 0&&t.orbitControl.update(),t.gameTime.getDelta(),t.backgroundPlane&&(t.backgroundPlane.material.uniforms.u_time.value=t.gameTime.getElapsedTime());for(var n=0;n<t.animationPool.length;n++)t.animationPool[n].update();if(t.usePostProcessing)t.composer.render();else{const s=t.renderer;s.autoClear=!1,s.clear(),s.render(t.wallpaperScene,t.orthographicCamera),s.render(t.scene,t.camera)}}return e(),t}function Ot(p){const o=new yt(p.renderer);p.composer=o,o.addPass(new vt(p.scene,p.camera)),new wt;const i=new bt(Ct);i.uniforms.scale.value=8;const e=document.getElementById("threedee1");e.getBoundingClientRect();const n=new X(new k(e.width,e.height),p.scene,p.camera);let s=[];p.scene.traverse(a=>{a.isMesh&&s.push(a)}),n.selectedObjects=s,o.addPass(n),n.edgeStrength=2,n.edgeGlow=2,n.edgeThickness=2;const r=new jt;o.addPass(r)}Dt().then(p=>_a=p);
