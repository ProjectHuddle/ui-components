import*as tslib_1 from"../polyfills/tslib.js";import{h}from"../project-huddle-ui.core.js";var Modal=function(){function e(){this.modalTitle="Alert"}return e.prototype.close=function(){return tslib_1.__awaiter(this,void 0,void 0,function(){return tslib_1.__generator(this,function(e){return this.visible=!1,[2,!1]})})},e.prototype.handleKeyDown=function(e){"Escape"===e.key&&this.close()},e.prototype.render=function(){var e=this;return h("div",{class:{"ph-visible":this.visible,"ph-modal-wrapper":!0}},h("div",{class:"ph-modal"},h("div",{class:"ph-modal-content"},h("slot",null),h("div",{class:"ph-close-button",onClick:function(){e.close()}},h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},h("path",{d:"M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"}))))))},Object.defineProperty(e,"is",{get:function(){return"ph-modal"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{close:{method:!0},modalTitle:{type:String,attr:"modal-title"},visible:{type:Boolean,attr:"visible",reflectToAttr:!0,mutable:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"window:keydown",method:"handleKeyDown"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{all:initial;font-size:16px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.ph-modal-wrapper,:host{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif;font-family:var(--ph-body-font,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif)}.ph-modal-wrapper{color:#51595f;color:var(--ph-body-color,#51595f);position:fixed;left:0;top:0;width:100%;height:100%;background-color:grey;opacity:0;visibility:hidden;-webkit-transform:scale(1.1);transform:scale(1.1);-webkit-transition:visibility 0s linear .25s,opacity .25s 0s,-webkit-transform .25s;transition:visibility 0s linear .25s,opacity .25s 0s,-webkit-transform .25s;transition:visibility 0s linear .25s,opacity .25s 0s,transform .25s;transition:visibility 0s linear .25s,opacity .25s 0s,transform .25s,-webkit-transform .25s;z-index:1}.ph-modal-wrapper ::slotted(:first-child){margin-top:0}.ph-modal-wrapper ::slotted(:last-child){margin-bottom:0}.ph-visible{opacity:1;visibility:visible;-webkit-transform:scale(1);transform:scale(1);-webkit-transition:visibility 0s linear 0s,opacity .25s 0s,-webkit-transform .25s;transition:visibility 0s linear 0s,opacity .25s 0s,-webkit-transform .25s;transition:visibility 0s linear 0s,opacity .25s 0s,transform .25s;transition:visibility 0s linear 0s,opacity .25s 0s,transform .25s,-webkit-transform .25s}.ph-modal{padding:35px 35px 30px 35px;background-color:#fff;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);border-radius:2px;min-width:500px}.ph-modal-title{font-size:18px}.ph-modal-content,.ph-modal-title{margin-bottom:1em}.ph-modal-button-container{text-align:right}.ph-close-button{width:14px;height:14px;opacity:.5;cursor:pointer;position:absolute;top:30px;right:30px}"},enumerable:!0,configurable:!0}),e}();export{Modal as PhModal};