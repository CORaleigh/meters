/*! For license information please see 6900.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[6900],{6900:(e,i,t)=>{t.r(i),t.d(i,{calcite_sheet:()=>h});var n=t(8641),s=t(2322),a=t(5489),o=t(3844),l=t(5527),r=t(1435),c=t(8274);const h=class{constructor(e){(0,n.r)(this,e),this.calciteSheetBeforeClose=(0,n.c)(this,"calciteSheetBeforeClose",6),this.calciteSheetClose=(0,n.c)(this,"calciteSheetClose",6),this.calciteSheetBeforeOpen=(0,n.c)(this,"calciteSheetBeforeOpen",6),this.calciteSheetOpen=(0,n.c)(this,"calciteSheetOpen",6),this.openTransitionProp="opacity",this.ignoreOpenChange=!1,this.mutationObserver=(0,l.c)("mutation",(()=>this.handleMutationObserver())),this.setTransitionEl=e=>{this.transitionEl=e,this.contentId=(0,s.w)(e)},this.openEnd=()=>{this.setFocus(),this.el.removeEventListener("calciteSheetOpen",this.openEnd)},this.handleOutsideClose=()=>{this.outsideCloseDisabled||(this.open=!1)},this.closeSheet=async()=>{if(this.beforeClose)try{await this.beforeClose(this.el)}catch(e){return void requestAnimationFrame((()=>{this.ignoreOpenChange=!0,this.open=!0,this.ignoreOpenChange=!1}))}this.opened=!1,this.removeOverflowHiddenClass()},this.beforeClose=void 0,this.displayMode="overlay",this.escapeDisabled=!1,this.heightScale="m",this.focusTrapDisabled=!1,this.label=void 0,this.open=!1,this.opened=!1,this.outsideCloseDisabled=!1,this.position="inline-start",this.slottedInShell=void 0,this.widthScale="m"}handleFocusTrapDisabled(e){this.open&&(e?(0,a.d)(this):(0,a.a)(this))}toggleSheet(e){this.ignoreOpenChange||(e?this.openSheet():this.closeSheet())}handleOpenedChange(){(0,r.o)(this)}async componentWillLoad(){(0,o.s)(this),this.open&&requestAnimationFrame((()=>this.openSheet()))}componentDidLoad(){(0,o.a)(this)}connectedCallback(){this.mutationObserver?.observe(this.el,{childList:!0,subtree:!0}),(0,a.c)(this)}disconnectedCallback(){this.removeOverflowHiddenClass(),this.mutationObserver?.disconnect(),(0,a.d)(this),this.slottedInShell=!1}render(){const e=(0,s.g)(this.el);return(0,n.h)(n.H,{"aria-describedby":this.contentId,"aria-label":this.label,"aria-modal":"true",role:"dialog"},(0,n.h)("div",{class:{container:!0,"container--open":this.opened,"container--slotted-in-shell":this.slottedInShell,[c.C.rtl]:"rtl"===e}},(0,n.h)("calcite-scrim",{class:"scrim",onClick:this.handleOutsideClose}),(0,n.h)("div",{class:{content:!0},ref:this.setTransitionEl},(0,n.h)("slot",null))))}handleEscape(e){!this.open||this.escapeDisabled||"Escape"!==e.key||e.defaultPrevented||(this.open=!1,e.preventDefault())}async setFocus(){await(0,o.c)(this),(0,s.f)(this.el)}async updateFocusTrapElements(){(0,a.u)(this)}onBeforeOpen(){this.calciteSheetBeforeOpen.emit()}onOpen(){this.calciteSheetOpen.emit(),(0,a.a)(this)}onBeforeClose(){this.calciteSheetBeforeClose.emit()}onClose(){this.calciteSheetClose.emit(),(0,a.d)(this)}openSheet(){this.el.addEventListener("calciteSheetOpen",this.openEnd),this.opened=!0,this.slottedInShell||(this.initialOverflowCSS=document.documentElement.style.overflow,document.documentElement.style.setProperty("overflow","hidden"))}removeOverflowHiddenClass(){document.documentElement.style.setProperty("overflow",this.initialOverflowCSS)}handleMutationObserver(){this.updateFocusTrapElements()}get el(){return(0,n.a)(this)}static get watchers(){return{focusTrapDisabled:["handleFocusTrapDisabled"],open:["toggleSheet"],opened:["handleOpenedChange"]}}};h.style=":host{position:absolute;inset:0px;z-index:var(--calcite-app-z-index-overlay);display:flex;visibility:hidden !important;--calcite-sheet-scrim-background-internal:rgba(0, 0, 0, 0.85);--calcite-scrim-shadow-block-start-internal:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--calcite-scrim-shadow-block-end-internal:0 -4px 8px -1px rgba(0, 0, 0, 0.08), 0 -2px 4px -1px rgba(0, 0, 0, 0.04);--calcite-scrim-shadow-inline-start-internal:4px 0 8px -1px rgba(0, 0, 0, 0.08), 2px 0 4px -1px rgba(0, 0, 0, 0.04);--calcite-scrim-shadow-inline-end-internal:-4px 0 8px -1px rgba(0, 0, 0, 0.08), -2px 0 4px -1px rgba(0, 0, 0, 0.04)}.calcite--rtl{--calcite-scrim-shadow-inline-start-internal:-4px 0 8px -1px rgba(0, 0, 0, 0.08), -2px 0 4px -1px rgba(0, 0, 0, 0.04);--calcite-scrim-shadow-inline-end-internal:4px 0 8px -1px rgba(0, 0, 0, 0.08), 2px 0 4px -1px rgba(0, 0, 0, 0.04)}.container{visibility:hidden;position:fixed;z-index:var(--calcite-app-z-index-overlay);display:flex;overflow-y:hidden;color:var(--calcite-ui-text-2);opacity:0;transition:visibility 0ms linear var(--calcite-internal-animation-timing-medium), opacity var(--calcite-internal-animation-timing-medium) cubic-bezier(0.215, 0.44, 0.42, 0.88)}:host([position=inline-start]) .container{justify-content:flex-start;inset-block:0;inset-inline:0 auto;--calcite-sheet-hidden-position-internal:translate3d(-1rem, 0, 0)}:host([position=inline-end]) .container{justify-content:flex-end;inset-block:0;inset-inline:auto 0;--calcite-sheet-hidden-position-internal:translate3d(1rem, 0, 0)}:host([position=block-start]) .container{align-items:flex-start;inset-block:0 auto;inset-inline:0;--calcite-sheet-hidden-position-internal:translate3d(0, -1rem, 0)}:host([position=block-end]) .container{align-items:flex-end;inset-block:auto 0;inset-inline:0;--calcite-sheet-hidden-position-internal:translate3d(0, 1rem, 0)}:host([display-mode=float]) .content{--tw-shadow:0 2px 12px -4px rgba(0, 0, 0, 0.2), 0 2px 4px -2px rgba(0, 0, 0, 0.16);--tw-shadow-colored:0 2px 12px -4px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([display-mode=overlay][position=inline-start]) .container{box-shadow:var(--calcite-scrim-shadow-inline-start-internal)}:host([display-mode=overlay][position=inline-end]) .container{box-shadow:var(--calcite-scrim-shadow-inline-end-internal)}:host([display-mode=overlay][position=block-start]) .container{box-shadow:var(--calcite-scrim-shadow-block-start-internal)}:host([display-mode=overlay][position=block-end]) .container{box-shadow:var(--calcite-scrim-shadow-block-end-internal)}:host([position^=inline]) .container,:host([position^=inline]) .content{inline-size:var(--calcite-sheet-width-internal);max-inline-size:var(--calcite-sheet-max-width-internal);min-inline-size:var(--calcite-sheet-min-width-internal)}:host([position^=block]) .container,:host([position^=block]) .content{block-size:var(--calcite-sheet-height-internal);max-block-size:var(--calcite-sheet-max-height-internal);min-block-size:var(--calcite-sheet-min-height-internal)}:host([display-mode=float][position^=inline]) .container{block-size:calc(100% - 1.5rem);max-block-size:calc(100% - 1.5rem);min-block-size:calc(100% - 1.5rem)}:host([display-mode=float][position^=block]) .container{inline-size:calc(100% - 1.5rem);max-inline-size:calc(100% - 1.5rem);min-inline-size:calc(100% - 1.5rem)}:host([position^=inline][width-scale=s]){--calcite-sheet-width-internal:var(--calcite-sheet-width, 15vw);--calcite-sheet-max-width-internal:var(--calcite-sheet-max-width, 360px);--calcite-sheet-min-width-internal:var(--calcite-sheet-min-width, 260px)}:host([position^=inline][width-scale=m]){--calcite-sheet-width-internal:var(--calcite-sheet-width, 25vw);--calcite-sheet-max-width-internal:var(--calcite-sheet-max-width, 420px);--calcite-sheet-min-width-internal:var(--calcite-sheet-min-width, 300px)}:host([position^=inline][width-scale=l]){--calcite-sheet-width-internal:var(--calcite-sheet-width, 45vw);--calcite-sheet-max-width-internal:var(--calcite-sheet-max-width, 680px);--calcite-sheet-min-width-internal:var(--calcite-sheet-min-width, 340px)}:host([position^=block][height-scale=s]){--calcite-sheet-min-height-internal:var(--calcite-sheet-min-height, 160px);--calcite-sheet-height-internal:var(--calcite-sheet-height, 30vh);--calcite-sheet-max-height-internal:var(--calcite-sheet-max-height, 30vh)}:host([position^=block][height-scale=m]){--calcite-sheet-min-height-internal:var(--calcite-sheet-min-height, 200px);--calcite-sheet-height-internal:var(--calcite-sheet-height, 45vh);--calcite-sheet-max-height-internal:var(--calcite-sheet-max-height, 50vh)}:host([position^=block][height-scale=l]){--calcite-sheet-min-height-internal:var(--calcite-sheet-min-height, 240px);--calcite-sheet-height-internal:var(--calcite-sheet-height, 60vh);--calcite-sheet-max-height-internal:var(--calcite-sheet-max-height, 70vh)}.scrim{--calcite-scrim-background:var(--calcite-sheet-scrim-background, var(--calcite-sheet-scrim-background-internal));position:fixed;inset:0px;display:flex;overflow-y:hidden}:host([opened]){visibility:visible !important}.content{position:relative;z-index:var(--calcite-app-z-index-modal);box-sizing:border-box;display:block;max-block-size:100%;max-inline-size:100%;overflow-y:hidden;padding:0px;background-color:var(--calcite-ui-foreground-1);max-block-size:100%;visibility:hidden;transition:transform var(--calcite-internal-animation-timing-medium) cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear var(--calcite-internal-animation-timing-medium), opacity var(--calcite-internal-animation-timing-medium) cubic-bezier(0.215, 0.44, 0.42, 0.88);transform:var(--calcite-sheet-hidden-position-internal)}.container--open .content{transform:translate3d(0, 0, 0)}:host([display-mode=float]) .content,:host([display-mode=float]) .container{border-radius:0.25rem}:host([display-mode=float]) .container{padding:0.75rem}.container--open{visibility:visible;opacity:1;transition-delay:0ms}.container--open .content{pointer-events:auto;visibility:visible;opacity:1;transition:transform var(--calcite-internal-animation-timing-medium) cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear, opacity var(--calcite-internal-animation-timing-medium) cubic-bezier(0.215, 0.44, 0.42, 0.88), max-inline-size var(--calcite-internal-animation-timing-medium) cubic-bezier(0.215, 0.44, 0.42, 0.88), max-block-size var(--calcite-internal-animation-timing-medium) cubic-bezier(0.215, 0.44, 0.42, 0.88);transition-delay:0ms}:host([position=inline-start]) .content,:host([position=inline-end]) .content{block-size:100%}:host([position=block-start]) .content,:host([position=block-end]) .content{inline-size:100%}:host([position]) .container--slotted-in-shell{pointer-events:auto;position:absolute;inline-size:100%;max-inline-size:100%;min-inline-size:100%;block-size:100%;max-block-size:100%;min-block-size:100%}:host([position]) .container--slotted-in-shell calcite-scrim{position:absolute}:host([hidden]){display:none}[hidden]{display:none}"},5527:(e,i,t)=>{function n(e,i,t){const n=function(e){class i extends window.MutationObserver{constructor(e){super(e),this.observedEntry=[],this.callback=e}observe(e,i){return this.observedEntry.push({target:e,options:i}),super.observe(e,i)}unobserve(e){const i=this.observedEntry.filter((i=>i.target!==e));this.observedEntry=[],this.callback(super.takeRecords(),this),this.disconnect(),i.forEach((e=>this.observe(e.target,e.options)))}}return"intersection"===e?window.IntersectionObserver:"mutation"===e?i:window.ResizeObserver}(e);return new n(i,t)}t.d(i,{c:()=>n})},1435:(e,i,t)=>{t.d(i,{o:()=>o});var n=t(8641);function s(e){return"opened"in e?e.opened:e.open}function a(e,i=!1){(i?e[e.transitionProp]:s(e))?e.onBeforeOpen():e.onBeforeClose(),(i?e[e.transitionProp]:s(e))?e.onOpen():e.onClose()}function o(e,i=!1){(0,n.e)((()=>{if(e.transitionEl){const{transitionDuration:t,transitionProperty:n}=getComputedStyle(e.transitionEl),o=t.split(","),l=o[n.split(",").indexOf(e.openTransitionProp)]??o[0];if("0s"===l)return void a(e,i);const r=setTimeout((()=>{e.transitionEl.removeEventListener("transitionstart",c),e.transitionEl.removeEventListener("transitionend",h),e.transitionEl.removeEventListener("transitioncancel",h),a(e,i)}),1e3*parseFloat(l));function c(t){t.propertyName===e.openTransitionProp&&t.target===e.transitionEl&&(clearTimeout(r),e.transitionEl.removeEventListener("transitionstart",c),(i?e[e.transitionProp]:s(e))?e.onBeforeOpen():e.onBeforeClose())}function h(t){t.propertyName===e.openTransitionProp&&t.target===e.transitionEl&&((i?e[e.transitionProp]:s(e))?e.onOpen():e.onClose(),e.transitionEl.removeEventListener("transitionend",h),e.transitionEl.removeEventListener("transitioncancel",h))}e.transitionEl.addEventListener("transitionstart",c),e.transitionEl.addEventListener("transitionend",h),e.transitionEl.addEventListener("transitioncancel",h)}}))}}}]);