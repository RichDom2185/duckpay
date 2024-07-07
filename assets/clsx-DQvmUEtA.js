import{r as c}from"./index-Dfvx2NNU.js";let _={data:""},H=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||_,L=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,U=/\/\*[^]*?\*\/|  +/g,D=/\n+/g,b=(t,e)=>{let r="",a="",s="";for(let o in t){let n=t[o];o[0]=="@"?o[1]=="i"?r=o+" "+n+";":a+=o[1]=="f"?b(n,o):o+"{"+b(n,o[1]=="k"?"":e)+"}":typeof n=="object"?a+=b(n,e?e.replace(/([^,])+/g,i=>o.replace(/(^:.*)|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,i):i?i+" "+l:l)):o):n!=null&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=b.p?b.p(o,n):o+":"+n+";")}return r+(e&&s?e+"{"+s+"}":s)+a},y={},T=t=>{if(typeof t=="object"){let e="";for(let r in t)e+=r+T(t[r]);return e}return t},R=(t,e,r,a,s)=>{let o=T(t),n=y[o]||(y[o]=(l=>{let d=0,u=11;for(;d<l.length;)u=101*u+l.charCodeAt(d++)>>>0;return"go"+u})(o));if(!y[n]){let l=o!==t?t:(d=>{let u,m,f=[{}];for(;u=L.exec(d.replace(U,""));)u[4]?f.shift():u[3]?(m=u[3].replace(D," ").trim(),f.unshift(f[0][m]=f[0][m]||{})):f[0][u[1]]=u[2].replace(D," ").trim();return f[0]})(t);y[n]=b(s?{["@keyframes "+n]:l}:l,r?"":"."+n)}let i=r&&y.g?y.g:null;return r&&(y.g=y[n]),((l,d,u,m)=>{m?d.data=d.data.replace(m,l):d.data.indexOf(l)===-1&&(d.data=u?l+d.data:d.data+l)})(y[n],e,a,i),n},Y=(t,e,r)=>t.reduce((a,s,o)=>{let n=e[o];if(n&&n.call){let i=n(r),l=i&&i.props&&i.props.className||/^go/.test(i)&&i;n=l?"."+l:i&&typeof i=="object"?i.props?"":b(i,""):i===!1?"":i}return a+s+(n??"")},"");function A(t){let e=this||{},r=t.call?t(e.p):t;return R(r.unshift?r.raw?Y(r,[].slice.call(arguments,1),e.p):r.reduce((a,s)=>Object.assign(a,s&&s.call?s(e.p):s),{}):r,H(e.target),e.g,e.o,e.k)}let M,I,N;A.bind({g:1});let h=A.bind({k:1});function Z(t,e,r,a){b.p=e,M=t,I=r,N=a}function v(t,e){let r=this||{};return function(){let a=arguments;function s(o,n){let i=Object.assign({},o),l=i.className||s.className;r.p=Object.assign({theme:I&&I()},i),r.o=/ *go\d+/.test(l),i.className=A.apply(r,a)+(l?" "+l:"");let d=t;return t[0]&&(d=i.as||t,delete i.as),N&&d[0]&&N(i),M(d,i)}return s}}var q=t=>typeof t=="function",O=(t,e)=>q(t)?t(e):t,B=(()=>{let t=0;return()=>(++t).toString()})(),F=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),G=20,$=new Map,J=1e3,P=t=>{if($.has(t))return;let e=setTimeout(()=>{$.delete(t),x({type:4,toastId:t})},J);$.set(t,e)},Q=t=>{let e=$.get(t);e&&clearTimeout(e)},z=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,G)};case 1:return e.toast.id&&Q(e.toast.id),{...t,toasts:t.toasts.map(o=>o.id===e.toast.id?{...o,...e.toast}:o)};case 2:let{toast:r}=e;return t.toasts.find(o=>o.id===r.id)?z(t,{type:1,toast:r}):z(t,{type:0,toast:r});case 3:let{toastId:a}=e;return a?P(a):t.toasts.forEach(o=>{P(o.id)}),{...t,toasts:t.toasts.map(o=>o.id===a||a===void 0?{...o,visible:!1}:o)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(o=>o.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let s=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+s}))}}},k=[],j={toasts:[],pausedAt:void 0},x=t=>{j=z(j,t),k.forEach(e=>{e(j)})},V={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},W=(t={})=>{let[e,r]=c.useState(j);c.useEffect(()=>(k.push(r),()=>{let s=k.indexOf(r);s>-1&&k.splice(s,1)}),[e]);let a=e.toasts.map(s=>{var o,n;return{...t,...t[s.type],...s,duration:s.duration||((o=t[s.type])==null?void 0:o.duration)||(t==null?void 0:t.duration)||V[s.type],style:{...t.style,...(n=t[s.type])==null?void 0:n.style,...s.style}}});return{...e,toasts:a}},X=(t,e="blank",r)=>({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...r,id:(r==null?void 0:r.id)||B()}),w=t=>(e,r)=>{let a=X(e,t,r);return x({type:2,toast:a}),a.id},p=(t,e)=>w("blank")(t,e);p.error=w("error");p.success=w("success");p.loading=w("loading");p.custom=w("custom");p.dismiss=t=>{x({type:3,toastId:t})};p.remove=t=>x({type:4,toastId:t});p.promise=(t,e,r)=>{let a=p.loading(e.loading,{...r,...r==null?void 0:r.loading});return t.then(s=>(p.success(O(e.success,s),{id:a,...r,...r==null?void 0:r.success}),s)).catch(s=>{p.error(O(e.error,s),{id:a,...r,...r==null?void 0:r.error})}),t};var K=(t,e)=>{x({type:1,toast:{id:t,height:e}})},tt=()=>{x({type:5,time:Date.now()})},et=t=>{let{toasts:e,pausedAt:r}=W(t);c.useEffect(()=>{if(r)return;let o=Date.now(),n=e.map(i=>{if(i.duration===1/0)return;let l=(i.duration||0)+i.pauseDuration-(o-i.createdAt);if(l<0){i.visible&&p.dismiss(i.id);return}return setTimeout(()=>p.dismiss(i.id),l)});return()=>{n.forEach(i=>i&&clearTimeout(i))}},[e,r]);let a=c.useCallback(()=>{r&&x({type:6,time:Date.now()})},[r]),s=c.useCallback((o,n)=>{let{reverseOrder:i=!1,gutter:l=8,defaultPosition:d}=n||{},u=e.filter(g=>(g.position||d)===(o.position||d)&&g.height),m=u.findIndex(g=>g.id===o.id),f=u.filter((g,C)=>C<m&&g.visible).length;return u.filter(g=>g.visible).slice(...i?[f+1]:[0,f]).reduce((g,C)=>g+(C.height||0)+l,0)},[e]);return{toasts:e,handlers:{updateHeight:K,startPause:tt,endPause:a,calculateOffset:s}}},rt=h`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,at=h`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ot=h`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,st=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${rt} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${at} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${ot} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,it=h`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,nt=v("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${it} 1s linear infinite;
`,lt=h`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,dt=h`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,ct=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${lt} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${dt} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,ut=v("div")`
  position: absolute;
`,pt=v("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,ft=h`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,mt=v("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${ft} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,gt=({toast:t})=>{let{icon:e,type:r,iconTheme:a}=t;return e!==void 0?typeof e=="string"?c.createElement(mt,null,e):e:r==="blank"?null:c.createElement(pt,null,c.createElement(nt,{...a}),r!=="loading"&&c.createElement(ut,null,r==="error"?c.createElement(st,{...a}):c.createElement(ct,{...a})))},yt=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ht=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,bt="0%{opacity:0;} 100%{opacity:1;}",vt="0%{opacity:1;} 100%{opacity:0;}",xt=v("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,wt=v("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Et=(t,e)=>{let r=t.includes("top")?1:-1,[a,s]=F()?[bt,vt]:[yt(r),ht(r)];return{animation:e?`${h(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${h(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},$t=c.memo(({toast:t,position:e,style:r,children:a})=>{let s=t.height?Et(t.position||e||"top-center",t.visible):{opacity:0},o=c.createElement(gt,{toast:t}),n=c.createElement(wt,{...t.ariaProps},O(t.message,t));return c.createElement(xt,{className:t.className,style:{...s,...r,...t.style}},typeof a=="function"?a({icon:o,message:n}):c.createElement(c.Fragment,null,o,n))});Z(c.createElement);var kt=({id:t,className:e,style:r,onHeightUpdate:a,children:s})=>{let o=c.useCallback(n=>{if(n){let i=()=>{let l=n.getBoundingClientRect().height;a(t,l)};i(),new MutationObserver(i).observe(n,{subtree:!0,childList:!0,characterData:!0})}},[t,a]);return c.createElement("div",{ref:o,className:e,style:r},s)},jt=(t,e)=>{let r=t.includes("top"),a=r?{top:0}:{bottom:0},s=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:F()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(r?1:-1)}px)`,...a,...s}},Ot=A`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,E=16,Ct=({reverseOrder:t,position:e="top-center",toastOptions:r,gutter:a,children:s,containerStyle:o,containerClassName:n})=>{let{toasts:i,handlers:l}=et(r);return c.createElement("div",{style:{position:"fixed",zIndex:9999,top:E,left:E,right:E,bottom:E,pointerEvents:"none",...o},className:n,onMouseEnter:l.startPause,onMouseLeave:l.endPause},i.map(d=>{let u=d.position||e,m=l.calculateOffset(d,{reverseOrder:t,gutter:a,defaultPosition:e}),f=jt(u,m);return c.createElement(kt,{id:d.id,key:d.id,onHeightUpdate:l.updateHeight,className:d.visible?Ot:"",style:f},d.type==="custom"?O(d.message,d):s?s(d):c.createElement($t,{toast:d,position:u}))}))},It=p;function S(t){var e,r,a="";if(typeof t=="string"||typeof t=="number")a+=t;else if(typeof t=="object")if(Array.isArray(t)){var s=t.length;for(e=0;e<s;e++)t[e]&&(r=S(t[e]))&&(a&&(a+=" "),a+=r)}else for(r in t)t[r]&&(a&&(a+=" "),a+=r);return a}function Nt(){for(var t,e,r=0,a="",s=arguments.length;r<s;r++)(t=arguments[r])&&(e=S(t))&&(a&&(a+=" "),a+=e);return a}export{Ct as I,O as T,It as _,Nt as c};
