import{v as vt,g as mt,c as Ve,a as ht,Q as pt}from"./QBtn-C4nzTEWJ.js";import{c as D,a as m,h as S,r as x,i as Ue,o as Y,g as A,b as F,n as xe,e as U,l as V,f as Ee,j as O,w as C,k as re,H as He,m as B,s as Ie,p as yt,q as gt,P as wt,t as bt,u as he,v as pe,x as te,y as Se,z as Oe,A as ye,B as Ct,C as Tt,D as je,E as qt,F as oe,G as St,I as Lt,J as xt,K,L as Et,M as zt,N as Q,O as kt,Q as $t,R as Pt}from"./index-BV0WGOoF.js";import{h as ae,a as Bt,b as Me,c as Vt}from"./render-DPHMhRd3.js";const Ht=D({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:o}){const n=m(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>S("div",{class:n.value},ae(o.default))}}),Ot=D({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:o}){const n=m(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>S("div",{class:n.value,role:"toolbar"},ae(o.default))}});function Mt(){const e=x(!Ue.value);return e.value===!1&&Y(()=>{e.value=!0}),{isHydrated:e}}const Ke=typeof ResizeObserver<"u",_e=Ke===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"},Le=D({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:o}){let n=null,l,t={width:-1,height:-1};function i(c){c===!0||e.debounce===0||e.debounce==="0"?s():n===null&&(n=setTimeout(s,e.debounce))}function s(){if(n!==null&&(clearTimeout(n),n=null),l){const{offsetWidth:c,offsetHeight:d}=l;(c!==t.width||d!==t.height)&&(t={width:c,height:d},o("resize",t))}}const{proxy:f}=A();if(f.trigger=i,Ke===!0){let c;const d=a=>{l=f.$el.parentNode,l?(c=new ResizeObserver(i),c.observe(l),s()):a!==!0&&U(()=>{d(!0)})};return Y(()=>{d()}),F(()=>{n!==null&&clearTimeout(n),c!==void 0&&(c.disconnect!==void 0?c.disconnect():l&&c.unobserve(l))}),xe}else{let c=function(){n!==null&&(clearTimeout(n),n=null),g!==void 0&&(g.removeEventListener!==void 0&&g.removeEventListener("resize",i,V.passive),g=void 0)},d=function(){c(),l&&l.contentDocument&&(g=l.contentDocument.defaultView,g.addEventListener("resize",i,V.passive),s())};const{isHydrated:a}=Mt();let g;return Y(()=>{U(()=>{l=f.$el,l&&d()})}),F(c),()=>{if(a.value===!0)return S("object",{class:"q--avoid-card-border",style:_e.style,tabindex:-1,type:"text/html",data:_e.url,"aria-hidden":"true",onLoad:d})}}}}),_t=D({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:o,emit:n}){const{proxy:{$q:l}}=A(),t=Ee(re,O);if(t===O)return console.error("QHeader needs to be child of QLayout"),O;const i=x(parseInt(e.heightHint,10)),s=x(!0),f=m(()=>e.reveal===!0||t.view.value.indexOf("H")!==-1||l.platform.is.ios&&t.isContainer.value===!0),c=m(()=>{if(e.modelValue!==!0)return 0;if(f.value===!0)return s.value===!0?i.value:0;const u=i.value-t.scroll.value.position;return u>0?u:0}),d=m(()=>e.modelValue!==!0||f.value===!0&&s.value!==!0),a=m(()=>e.modelValue===!0&&d.value===!0&&e.reveal===!0),g=m(()=>"q-header q-layout__section--marginal "+(f.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(d.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),b=m(()=>{const u=t.rows.value.top,T={};return u[0]==="l"&&t.left.space===!0&&(T[l.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),u[2]==="r"&&t.right.space===!0&&(T[l.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),T});function v(u,T){t.update("header",u,T)}function h(u,T){u.value!==T&&(u.value=T)}function E({height:u}){h(i,u),v("size",u)}function q(u){a.value===!0&&h(s,!0),n("focusin",u)}C(()=>e.modelValue,u=>{v("space",u),h(s,!0),t.animate()}),C(c,u=>{v("offset",u)}),C(()=>e.reveal,u=>{u===!1&&h(s,e.modelValue)}),C(s,u=>{t.animate(),n("reveal",u)}),C(t.scroll,u=>{e.reveal===!0&&h(s,u.direction==="up"||u.position<=e.revealOffset||u.position-u.inflectionPoint<100)});const y={};return t.instances.header=y,e.modelValue===!0&&v("size",i.value),v("space",e.modelValue),v("offset",c.value),F(()=>{t.instances.header===y&&(t.instances.header=void 0,v("size",0),v("offset",0),v("space",!1))}),()=>{const u=Bt(o.default,[]);return e.elevated===!0&&u.push(S("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),u.push(S(Le,{debounce:0,onResize:E})),S("header",{class:g.value,style:b.value,onFocusin:q},u)}}});function Dt(e,o,n){let l;function t(){l!==void 0&&(He.remove(l),l=void 0)}return F(()=>{e.value===!0&&t()}),{removeFromHistory:t,addToHistory(){l={condition:()=>n.value===!0,handler:o},He.add(l)}}}const At={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Wt=["beforeShow","show","beforeHide","hide"];function Qt({showing:e,canShow:o,hideOnRouteChange:n,handleShow:l,handleHide:t,processOnMount:i}){const s=A(),{props:f,emit:c,proxy:d}=s;let a;function g(u){e.value===!0?h(u):b(u)}function b(u){if(f.disable===!0||u!==void 0&&u.qAnchorHandled===!0||o!==void 0&&o(u)!==!0)return;const T=f["onUpdate:modelValue"]!==void 0;T===!0&&(c("update:modelValue",!0),a=u,U(()=>{a===u&&(a=void 0)})),(f.modelValue===null||T===!1)&&v(u)}function v(u){e.value!==!0&&(e.value=!0,c("beforeShow",u),l!==void 0?l(u):c("show",u))}function h(u){if(f.disable===!0)return;const T=f["onUpdate:modelValue"]!==void 0;T===!0&&(c("update:modelValue",!1),a=u,U(()=>{a===u&&(a=void 0)})),(f.modelValue===null||T===!1)&&E(u)}function E(u){e.value!==!1&&(e.value=!1,c("beforeHide",u),t!==void 0?t(u):c("hide",u))}function q(u){f.disable===!0&&u===!0?f["onUpdate:modelValue"]!==void 0&&c("update:modelValue",!1):u===!0!==e.value&&(u===!0?v:E)(a)}C(()=>f.modelValue,q),n!==void 0&&vt(s)===!0&&C(()=>d.$route.fullPath,()=>{n.value===!0&&e.value===!0&&h()}),i===!0&&Y(()=>{q(f.modelValue)});const y={show:b,hide:h,toggle:g};return Object.assign(d,y),y}const Rt=[Element,String],Ft=[null,document,document.body,document.scrollingElement,document.documentElement];function Nt(e,o){let n=mt(o);if(n===void 0){if(e==null)return window;n=e.closest(".scroll,.scroll-y,.overflow-auto")}return Ft.includes(n)?window:n}function Ge(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function Je(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let ne;function ge(){if(ne!==void 0)return ne;const e=document.createElement("p"),o=document.createElement("div");Ve(e,{width:"100%",height:"200px"}),Ve(o,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),o.appendChild(e),document.body.appendChild(o);const n=e.offsetWidth;o.style.overflow="scroll";let l=e.offsetWidth;return n===l&&(l=o.clientWidth),o.remove(),ne=n-l,ne}function Xt(e,o=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:o?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let G=0,we,be,J,Ce=!1,De,Ae,We,R=null;function Yt(e){Ut(e)&&Ie(e)}function Ut(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const o=yt(e),n=e.shiftKey&&!e.deltaX,l=!n&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),t=n||l?e.deltaY:e.deltaX;for(let i=0;i<o.length;i++){const s=o[i];if(Xt(s,l))return l?t<0&&s.scrollTop===0?!0:t>0&&s.scrollTop+s.clientHeight===s.scrollHeight:t<0&&s.scrollLeft===0?!0:t>0&&s.scrollLeft+s.clientWidth===s.scrollWidth}return!0}function Qe(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function ie(e){Ce!==!0&&(Ce=!0,requestAnimationFrame(()=>{Ce=!1;const{height:o}=e.target,{clientHeight:n,scrollTop:l}=document.scrollingElement;(J===void 0||o!==window.innerHeight)&&(J=n-o,document.scrollingElement.scrollTop=l),l>J&&(document.scrollingElement.scrollTop-=Math.ceil((l-J)/8))}))}function Re(e){const o=document.body,n=window.visualViewport!==void 0;if(e==="add"){const{overflowY:l,overflowX:t}=window.getComputedStyle(o);we=Je(window),be=Ge(window),De=o.style.left,Ae=o.style.top,We=window.location.href,o.style.left=`-${we}px`,o.style.top=`-${be}px`,t!=="hidden"&&(t==="scroll"||o.scrollWidth>window.innerWidth)&&o.classList.add("q-body--force-scrollbar-x"),l!=="hidden"&&(l==="scroll"||o.scrollHeight>window.innerHeight)&&o.classList.add("q-body--force-scrollbar-y"),o.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,B.is.ios===!0&&(n===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",ie,V.passiveCapture),window.visualViewport.addEventListener("scroll",ie,V.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",Qe,V.passiveCapture))}B.is.desktop===!0&&B.is.mac===!0&&window[`${e}EventListener`]("wheel",Yt,V.notPassive),e==="remove"&&(B.is.ios===!0&&(n===!0?(window.visualViewport.removeEventListener("resize",ie,V.passiveCapture),window.visualViewport.removeEventListener("scroll",ie,V.passiveCapture)):window.removeEventListener("scroll",Qe,V.passiveCapture)),o.classList.remove("q-body--prevent-scroll"),o.classList.remove("q-body--force-scrollbar-x"),o.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,o.style.left=De,o.style.top=Ae,window.location.href===We&&window.scrollTo(we,be),J=void 0)}function It(e){let o="add";if(e===!0){if(G++,R!==null){clearTimeout(R),R=null;return}if(G>1)return}else{if(G===0||(G--,G>0))return;if(o="remove",B.is.ios===!0&&B.is.nativeMobile===!0){R!==null&&clearTimeout(R),R=setTimeout(()=>{Re(o),R=null},100);return}}Re(o)}function jt(){let e;return{preventBodyScroll(o){o!==e&&(e!==void 0||o===!0)&&(e=o,It(o))}}}function Kt(){let e=null;const o=A();function n(){e!==null&&(clearTimeout(e),e=null)}return gt(n),F(n),{removeTimeout:n,registerTimeout(l,t){n(),ht(o)===!1&&(e=setTimeout(()=>{e=null,l()},t))}}}const Gt={dark:{type:Boolean,default:null}};function Jt(e,o){return m(()=>e.dark===null?o.dark.isActive:e.dark)}const ze={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Zt=Object.keys(ze);ze.all=!0;function Fe(e){const o={};for(const n of Zt)e[n]===!0&&(o[n]=!0);return Object.keys(o).length===0?ze:(o.horizontal===!0?o.left=o.right=!0:o.left===!0&&o.right===!0&&(o.horizontal=!0),o.vertical===!0?o.up=o.down=!0:o.up===!0&&o.down===!0&&(o.vertical=!0),o.horizontal===!0&&o.vertical===!0&&(o.all=!0),o)}const eo=["INPUT","TEXTAREA"];function Ne(e,o){return o.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof o.handler=="function"&&eo.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(o.uid)===-1)}function to(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),wt.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function Te(e,o,n){const l=Se(e);let t,i=l.left-o.event.x,s=l.top-o.event.y,f=Math.abs(i),c=Math.abs(s);const d=o.direction;d.horizontal===!0&&d.vertical!==!0?t=i<0?"left":"right":d.horizontal!==!0&&d.vertical===!0?t=s<0?"up":"down":d.up===!0&&s<0?(t="up",f>c&&(d.left===!0&&i<0?t="left":d.right===!0&&i>0&&(t="right"))):d.down===!0&&s>0?(t="down",f>c&&(d.left===!0&&i<0?t="left":d.right===!0&&i>0&&(t="right"))):d.left===!0&&i<0?(t="left",f<c&&(d.up===!0&&s<0?t="up":d.down===!0&&s>0&&(t="down"))):d.right===!0&&i>0&&(t="right",f<c&&(d.up===!0&&s<0?t="up":d.down===!0&&s>0&&(t="down")));let a=!1;if(t===void 0&&n===!1){if(o.event.isFirst===!0||o.event.lastDir===void 0)return{};t=o.event.lastDir,a=!0,t==="left"||t==="right"?(l.left-=i,f=0,i=0):(l.top-=s,c=0,s=0)}return{synthetic:a,payload:{evt:e,touch:o.event.mouse!==!0,mouse:o.event.mouse===!0,position:l,direction:t,isFirst:o.event.isFirst,isFinal:n===!0,duration:Date.now()-o.event.time,distance:{x:f,y:c},offset:{x:i,y:s},delta:{x:l.left-o.event.lastX,y:l.top-o.event.lastY}}}}let oo=0;const qe=bt({name:"touch-pan",beforeMount(e,{value:o,modifiers:n}){if(n.mouse!==!0&&B.has.touch!==!0)return;function l(i,s){n.mouse===!0&&s===!0?Ie(i):(n.stop===!0&&ye(i),n.prevent===!0&&Oe(i))}const t={uid:"qvtp_"+oo++,handler:o,modifiers:n,direction:Fe(n),noop:xe,mouseStart(i){Ne(i,t)&&Ct(i)&&(te(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(i,!0))},touchStart(i){if(Ne(i,t)){const s=i.target;te(t,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","passiveCapture"],[s,"touchend","end","passiveCapture"]]),t.start(i)}},start(i,s){if(B.is.firefox===!0&&pe(e,!0),t.lastEvt=i,s===!0||n.stop===!0){if(t.direction.all!==!0&&(s!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const d=i.type.indexOf("mouse")!==-1?new MouseEvent(i.type,i):new TouchEvent(i.type,i);i.defaultPrevented===!0&&Oe(d),i.cancelBubble===!0&&ye(d),Object.assign(d,{qKeyEvent:i.qKeyEvent,qClickOutside:i.qClickOutside,qAnchorHandled:i.qAnchorHandled,qClonedBy:i.qClonedBy===void 0?[t.uid]:i.qClonedBy.concat(t.uid)}),t.initialEvent={target:i.target,event:d}}ye(i)}const{left:f,top:c}=Se(i);t.event={x:f,y:c,time:Date.now(),mouse:s===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:f,lastY:c}},move(i){if(t.event===void 0)return;const s=Se(i),f=s.left-t.event.x,c=s.top-t.event.y;if(f===0&&c===0)return;t.lastEvt=i;const d=t.event.mouse===!0,a=()=>{l(i,d);let v;n.preserveCursor!==!0&&n.preservecursor!==!0&&(v=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),d===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),to(),t.styleCleanup=h=>{if(t.styleCleanup=void 0,v!==void 0&&(document.documentElement.style.cursor=v),document.body.classList.remove("non-selectable"),d===!0){const E=()=>{document.body.classList.remove("no-pointer-events--children")};h!==void 0?setTimeout(()=>{E(),h()},50):E()}else h!==void 0&&h()}};if(t.event.detected===!0){t.event.isFirst!==!0&&l(i,t.event.mouse);const{payload:v,synthetic:h}=Te(i,t,!1);v!==void 0&&(t.handler(v)===!1?t.end(i):(t.styleCleanup===void 0&&t.event.isFirst===!0&&a(),t.event.lastX=v.position.left,t.event.lastY=v.position.top,t.event.lastDir=h===!0?void 0:v.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||d===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){a(),t.event.detected=!0,t.move(i);return}const g=Math.abs(f),b=Math.abs(c);g!==b&&(t.direction.horizontal===!0&&g>b||t.direction.vertical===!0&&g<b||t.direction.up===!0&&g<b&&c<0||t.direction.down===!0&&g<b&&c>0||t.direction.left===!0&&g>b&&f<0||t.direction.right===!0&&g>b&&f>0?(t.event.detected=!0,t.move(i)):t.end(i,!0))},end(i,s){if(t.event!==void 0){if(he(t,"temp"),B.is.firefox===!0&&pe(e,!1),s===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(Te(i===void 0?t.lastEvt:i,t).payload);const{payload:f}=Te(i===void 0?t.lastEvt:i,t,!0),c=()=>{t.handler(f)};t.styleCleanup!==void 0?t.styleCleanup(c):c()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,n.mouse===!0){const i=n.mouseCapture===!0||n.mousecapture===!0?"Capture":"";te(t,"main",[[e,"mousedown","mouseStart",`passive${i}`]])}B.has.touch===!0&&te(t,"main",[[e,"touchstart","touchStart",`passive${n.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,o){const n=e.__qtouchpan;n!==void 0&&(o.oldValue!==o.value&&(typeof value!="function"&&n.end(),n.handler=o.value),n.direction=Fe(o.modifiers))},beforeUnmount(e){const o=e.__qtouchpan;o!==void 0&&(o.event!==void 0&&o.end(),he(o,"main"),he(o,"temp"),B.is.firefox===!0&&pe(e,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete e.__qtouchpan)}});function le(e,o,n){return n<=o?o:Math.min(n,Math.max(o,e))}const Xe=150,no=D({name:"QDrawer",inheritAttrs:!1,props:{...At,...Gt,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Wt,"onLayout","miniState"],setup(e,{slots:o,emit:n,attrs:l}){const t=A(),{proxy:{$q:i}}=t,s=Jt(e,i),{preventBodyScroll:f}=jt(),{registerTimeout:c,removeTimeout:d}=Kt(),a=Ee(re,O);if(a===O)return console.error("QDrawer needs to be child of QLayout"),O;let g,b=null,v;const h=x(e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint),E=m(()=>e.mini===!0&&h.value!==!0),q=m(()=>E.value===!0?e.miniWidth:e.width),y=x(e.showIfAbove===!0&&h.value===!1?!0:e.modelValue===!0),u=m(()=>e.persistent!==!0&&(h.value===!0||Ze.value===!0));function T(r,p){if($(),r!==!1&&a.animate(),P(0),h.value===!0){const k=a.instances[Z.value];k!==void 0&&k.belowBreakpoint===!0&&k.hide(!1),M(1),a.isContainer.value!==!0&&f(!0)}else M(0),r!==!1&&fe(!1);c(()=>{r!==!1&&fe(!0),p!==!0&&n("show",r)},Xe)}function w(r,p){I(),r!==!1&&a.animate(),M(0),P(N.value*q.value),ve(),p!==!0?c(()=>{n("hide",r)},Xe):d()}const{show:L,hide:z}=Qt({showing:y,hideOnRouteChange:u,handleShow:T,handleHide:w}),{addToHistory:$,removeFromHistory:I}=Dt(y,z,u),W={belowBreakpoint:h,hide:z},H=m(()=>e.side==="right"),N=m(()=>(i.lang.rtl===!0?-1:1)*(H.value===!0?1:-1)),ke=x(0),X=x(!1),ue=x(!1),$e=x(q.value*N.value),Z=m(()=>H.value===!0?"left":"right"),se=m(()=>y.value===!0&&h.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:q.value:0),de=m(()=>e.overlay===!0||e.miniToOverlay===!0||a.view.value.indexOf(H.value?"R":"L")!==-1||i.platform.is.ios===!0&&a.isContainer.value===!0),j=m(()=>e.overlay===!1&&y.value===!0&&h.value===!1),Ze=m(()=>e.overlay===!0&&y.value===!0&&h.value===!1),et=m(()=>"fullscreen q-drawer__backdrop"+(y.value===!1&&X.value===!1?" hidden":"")),tt=m(()=>({backgroundColor:`rgba(0,0,0,${ke.value*.4})`})),Pe=m(()=>H.value===!0?a.rows.value.top[2]==="r":a.rows.value.top[0]==="l"),ot=m(()=>H.value===!0?a.rows.value.bottom[2]==="r":a.rows.value.bottom[0]==="l"),nt=m(()=>{const r={};return a.header.space===!0&&Pe.value===!1&&(de.value===!0?r.top=`${a.header.offset}px`:a.header.space===!0&&(r.top=`${a.header.size}px`)),a.footer.space===!0&&ot.value===!1&&(de.value===!0?r.bottom=`${a.footer.offset}px`:a.footer.space===!0&&(r.bottom=`${a.footer.size}px`)),r}),it=m(()=>{const r={width:`${q.value}px`,transform:`translateX(${$e.value}px)`};return h.value===!0?r:Object.assign(r,nt.value)}),lt=m(()=>"q-drawer__content fit "+(a.isContainer.value!==!0?"scroll":"overflow-auto")),rt=m(()=>`q-drawer q-drawer--${e.side}`+(ue.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(s.value===!0?" q-drawer--dark q-dark":"")+(X.value===!0?" no-transition":y.value===!0?"":" q-layout--prevent-focus")+(h.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${E.value===!0?"mini":"standard"}`+(de.value===!0||j.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Pe.value===!0?" q-drawer--top-padding":""))),at=m(()=>{const r=i.lang.rtl===!0?e.side:Z.value;return[[qe,ct,void 0,{[r]:!0,mouse:!0}]]}),ut=m(()=>{const r=i.lang.rtl===!0?Z.value:e.side;return[[qe,Be,void 0,{[r]:!0,mouse:!0}]]}),st=m(()=>{const r=i.lang.rtl===!0?Z.value:e.side;return[[qe,Be,void 0,{[r]:!0,mouse:!0,mouseAllDir:!0}]]});function ce(){ft(h,e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint)}C(h,r=>{r===!0?(g=y.value,y.value===!0&&z(!1)):e.overlay===!1&&e.behavior!=="mobile"&&g!==!1&&(y.value===!0?(P(0),M(0),ve()):L(!1))}),C(()=>e.side,(r,p)=>{a.instances[p]===W&&(a.instances[p]=void 0,a[p].space=!1,a[p].offset=0),a.instances[r]=W,a[r].size=q.value,a[r].space=j.value,a[r].offset=se.value}),C(a.totalWidth,()=>{(a.isContainer.value===!0||document.qScrollPrevented!==!0)&&ce()}),C(()=>e.behavior+e.breakpoint,ce),C(a.isContainer,r=>{y.value===!0&&f(r!==!0),r===!0&&ce()}),C(a.scrollbarWidth,()=>{P(y.value===!0?0:void 0)}),C(se,r=>{_("offset",r)}),C(j,r=>{n("onLayout",r),_("space",r)}),C(H,()=>{P()}),C(q,r=>{P(),me(e.miniToOverlay,r)}),C(()=>e.miniToOverlay,r=>{me(r,q.value)}),C(()=>i.lang.rtl,()=>{P()}),C(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(dt(),a.animate())}),C(E,r=>{n("miniState",r)});function P(r){r===void 0?U(()=>{r=y.value===!0?0:q.value,P(N.value*r)}):(a.isContainer.value===!0&&H.value===!0&&(h.value===!0||Math.abs(r)===q.value)&&(r+=N.value*a.scrollbarWidth.value),$e.value=r)}function M(r){ke.value=r}function fe(r){const p=r===!0?"remove":a.isContainer.value!==!0?"add":"";p!==""&&document.body.classList[p]("q-body--drawer-toggle")}function dt(){b!==null&&clearTimeout(b),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),ue.value=!0,b=setTimeout(()=>{b=null,ue.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function ct(r){if(y.value!==!1)return;const p=q.value,k=le(r.distance.x,0,p);if(r.isFinal===!0){k>=Math.min(75,p)===!0?L():(a.animate(),M(0),P(N.value*p)),X.value=!1;return}P((i.lang.rtl===!0?H.value!==!0:H.value)?Math.max(p-k,0):Math.min(0,k-p)),M(le(k/p,0,1)),r.isFirst===!0&&(X.value=!0)}function Be(r){if(y.value!==!0)return;const p=q.value,k=r.direction===e.side,ee=(i.lang.rtl===!0?k!==!0:k)?le(r.distance.x,0,p):0;if(r.isFinal===!0){Math.abs(ee)<Math.min(75,p)===!0?(a.animate(),M(1),P(0)):z(),X.value=!1;return}P(N.value*ee),M(le(1-ee/p,0,1)),r.isFirst===!0&&(X.value=!0)}function ve(){f(!1),fe(!0)}function _(r,p){a.update(e.side,r,p)}function ft(r,p){r.value!==p&&(r.value=p)}function me(r,p){_("size",r===!0?e.miniWidth:p)}return a.instances[e.side]=W,me(e.miniToOverlay,q.value),_("space",j.value),_("offset",se.value),e.showIfAbove===!0&&e.modelValue!==!0&&y.value===!0&&e["onUpdate:modelValue"]!==void 0&&n("update:modelValue",!0),Y(()=>{n("onLayout",j.value),n("miniState",E.value),g=e.showIfAbove===!0;const r=()=>{(y.value===!0?T:w)(!1,!0)};if(a.totalWidth.value!==0){U(r);return}v=C(a.totalWidth,()=>{v(),v=void 0,y.value===!1&&e.showIfAbove===!0&&h.value===!1?L(!1):r()})}),F(()=>{v!==void 0&&v(),b!==null&&(clearTimeout(b),b=null),y.value===!0&&ve(),a.instances[e.side]===W&&(a.instances[e.side]=void 0,_("size",0),_("offset",0),_("space",!1))}),()=>{const r=[];h.value===!0&&(e.noSwipeOpen===!1&&r.push(Tt(S("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),at.value)),r.push(Me("div",{ref:"backdrop",class:et.value,style:tt.value,"aria-hidden":"true",onClick:z},void 0,"backdrop",e.noSwipeBackdrop!==!0&&y.value===!0,()=>st.value)));const p=E.value===!0&&o.mini!==void 0,k=[S("div",{...l,key:""+p,class:[lt.value,l.class]},p===!0?o.mini():ae(o.default))];return e.elevated===!0&&y.value===!0&&k.push(S("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),r.push(Me("aside",{ref:"content",class:rt.value,style:it.value},k,"contentclose",e.noSwipeClose!==!0&&h.value===!0,()=>ut.value)),S("div",{class:"q-drawer-container"},r)}}}),io=D({name:"QPageContainer",setup(e,{slots:o}){const{proxy:{$q:n}}=A(),l=Ee(re,O);if(l===O)return console.error("QPageContainer needs to be child of QLayout"),O;je(qt,!0);const t=m(()=>{const i={};return l.header.space===!0&&(i.paddingTop=`${l.header.size}px`),l.right.space===!0&&(i[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${l.right.size}px`),l.footer.space===!0&&(i.paddingBottom=`${l.footer.size}px`),l.left.space===!0&&(i[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${l.left.size}px`),i});return()=>S("div",{class:"q-page-container",style:t.value},ae(o.default))}}),{passive:Ye}=V,lo=["both","horizontal","vertical"],ro=D({name:"QScrollObserver",props:{axis:{type:String,validator:e=>lo.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:Rt},emits:["scroll"],setup(e,{emit:o}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let l=null,t,i;C(()=>e.scrollTarget,()=>{c(),f()});function s(){l!==null&&l();const g=Math.max(0,Ge(t)),b=Je(t),v={top:g-n.position.top,left:b-n.position.left};if(e.axis==="vertical"&&v.top===0||e.axis==="horizontal"&&v.left===0)return;const h=Math.abs(v.top)>=Math.abs(v.left)?v.top<0?"up":"down":v.left<0?"left":"right";n.position={top:g,left:b},n.directionChanged=n.direction!==h,n.delta=v,n.directionChanged===!0&&(n.direction=h,n.inflectionPoint=n.position),o("scroll",{...n})}function f(){t=Nt(i,e.scrollTarget),t.addEventListener("scroll",d,Ye),d(!0)}function c(){t!==void 0&&(t.removeEventListener("scroll",d,Ye),t=void 0)}function d(g){if(g===!0||e.debounce===0||e.debounce==="0")s();else if(l===null){const[b,v]=e.debounce?[setTimeout(s,e.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];l=()=>{v(b),l=null}}}const{proxy:a}=A();return C(()=>a.$q.lang.rtl,s),Y(()=>{i=a.$el.parentNode,f()}),F(()=>{l!==null&&l(),c()}),Object.assign(a,{trigger:d,getPosition:()=>n}),xe}}),ao=D({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:o,emit:n}){const{proxy:{$q:l}}=A(),t=x(null),i=x(l.screen.height),s=x(e.container===!0?0:l.screen.width),f=x({position:0,direction:"down",inflectionPoint:0}),c=x(0),d=x(Ue.value===!0?0:ge()),a=m(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),g=m(()=>e.container===!1?{minHeight:l.screen.height+"px"}:null),b=m(()=>d.value!==0?{[l.lang.rtl===!0?"left":"right"]:`${d.value}px`}:null),v=m(()=>d.value!==0?{[l.lang.rtl===!0?"right":"left"]:0,[l.lang.rtl===!0?"left":"right"]:`-${d.value}px`,width:`calc(100% + ${d.value}px)`}:null);function h(w){if(e.container===!0||document.qScrollPrevented!==!0){const L={position:w.position.top,direction:w.direction,directionChanged:w.directionChanged,inflectionPoint:w.inflectionPoint.top,delta:w.delta.top};f.value=L,e.onScroll!==void 0&&n("scroll",L)}}function E(w){const{height:L,width:z}=w;let $=!1;i.value!==L&&($=!0,i.value=L,e.onScrollHeight!==void 0&&n("scrollHeight",L),y()),s.value!==z&&($=!0,s.value=z),$===!0&&e.onResize!==void 0&&n("resize",w)}function q({height:w}){c.value!==w&&(c.value=w,y())}function y(){if(e.container===!0){const w=i.value>c.value?ge():0;d.value!==w&&(d.value=w)}}let u=null;const T={instances:{},view:m(()=>e.view),isContainer:m(()=>e.container),rootRef:t,height:i,containerHeight:c,scrollbarWidth:d,totalWidth:m(()=>s.value+d.value),rows:m(()=>{const w=e.view.toLowerCase().split(" ");return{top:w[0].split(""),middle:w[1].split(""),bottom:w[2].split("")}}),header:oe({size:0,offset:0,space:!1}),right:oe({size:300,offset:0,space:!1}),footer:oe({size:0,offset:0,space:!1}),left:oe({size:300,offset:0,space:!1}),scroll:f,animate(){u!==null?clearTimeout(u):document.body.classList.add("q-body--layout-animate"),u=setTimeout(()=>{u=null,document.body.classList.remove("q-body--layout-animate")},155)},update(w,L,z){T[w][L]=z}};if(je(re,T),ge()>0){let w=function(){$=null,I.classList.remove("hide-scrollbar")},L=function(){if($===null){if(I.scrollHeight>l.screen.height)return;I.classList.add("hide-scrollbar")}else clearTimeout($);$=setTimeout(w,300)},z=function(W){$!==null&&W==="remove"&&(clearTimeout($),w()),window[`${W}EventListener`]("resize",L)},$=null;const I=document.body;C(()=>e.container!==!0?"add":"remove",z),e.container!==!0&&z("add"),St(()=>{z("remove")})}return()=>{const w=Vt(o.default,[S(ro,{onScroll:h}),S(Le,{onResize:E})]),L=S("div",{class:a.value,style:g.value,ref:e.container===!0?void 0:t,tabindex:-1},w);return e.container===!0?S("div",{class:"q-layout-container overflow-hidden",ref:t},[S(Le,{onResize:q}),S("div",{class:"absolute-full",style:b.value},[S("div",{class:"scroll",style:v.value},[L])])]):L}}}),vo=Lt({__name:"MainLayout",setup(e){const o=x(!1);function n(){o.value=!o.value}return(l,t)=>{const i=Et("router-view");return zt(),xt(ao,{view:"lHh Lpr lFf"},{default:K(()=>[Q(_t,{elevated:""},{default:K(()=>[Q(Ot,null,{default:K(()=>[Q(pt,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:n}),Q(Ht,null,{default:K(()=>t[1]||(t[1]=[$t(" Quasar App ")])),_:1}),kt("div",null,"Quasar v"+Pt(l.$q.version),1)]),_:1})]),_:1}),Q(no,{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=s=>o.value=s),"show-if-above":"",bordered:""},null,8,["modelValue"]),Q(io,null,{default:K(()=>[Q(i)]),_:1})]),_:1})}}});export{vo as default};
