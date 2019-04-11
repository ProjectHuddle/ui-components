import*as tslib_1 from"../polyfills/tslib.js";import{h}from"../project-huddle-ui.core.js";var Button=function(){function e(){this.type="default",this.size="normal",this.circled=!1,this.rounded=!1}return e.prototype.render=function(){var e,t=((e={"ph-button":!0})["ph-button__"+this.type]=!0,e["ph-button__size--"+this.size]=!0,e["ph-button__style--circled"]=this.circled,e["ph-button__style--rounded"]=this.rounded,e);return h("div",{class:t},h("slot",null))},Object.defineProperty(e,"is",{get:function(){return"ph-button"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{circled:{type:Boolean,attr:"circled"},rounded:{type:Boolean,attr:"rounded"},size:{type:String,attr:"size"},type:{type:String,attr:"type"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{all:initial;font-size:16px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif;font-family:var(--ph-body-font,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif)}.ph-button,:host{-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block}.ph-button{padding:16px 22px;background:transparent;color:#4353ff;color:var(--ph-accent-color,#4353ff);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:2px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;text-decoration:none;text-align:center;padding:15px 20px;border:2px solid transparent;border-color:#4353ff;border-color:var(--ph-accent-color,#4353ff);cursor:pointer;-webkit-transition:opacity .25s ease,color .25s ease,background .25s ease,-webkit-transform .25s ease;transition:opacity .25s ease,color .25s ease,background .25s ease,-webkit-transform .25s ease;transition:opacity .25s ease,color .25s ease,transform .25s ease,background .25s ease;transition:opacity .25s ease,color .25s ease,transform .25s ease,background .25s ease,-webkit-transform .25s ease}.ph-button:hover{background:#4353ff;background:var(--ph-accent-color,#4353ff);color:#fff}.ph-button__style--rounded{border-radius:99999px}.ph-button__style--circled{border-radius:50%;min-height:40px;min-width:40px;padding:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;line-height:36px;text-align:center}.ph-button__size--large{padding:20px 25px}.ph-button__size--small{padding:10px 15px}.ph-button__size--mini{padding:5px 10px}.ph-button__primary{background:#4353ff;background:var(--ph-accent-color,#4353ff);color:#fff}.ph-button__primary:hover{opacity:.85}.ph-button__text{color:#999;color:var(--ph-muted-color,#999);background:transparent;border-color:transparent}.ph-button__text:hover{background:transparent;color:#51595f;color:var(--ph-body-color,#51595f)}"},enumerable:!0,configurable:!0}),e}(),Dialog=function(){function e(){this.dialogTitle="Alert"}return e.prototype.close=function(){return tslib_1.__awaiter(this,void 0,void 0,function(){return tslib_1.__generator(this,function(e){return this.visible=!1,[2,!1]})})},e.prototype.handleKeyDown=function(e){"Escape"===e.key&&this.close()},e.prototype.render=function(){var e=this;return h("div",{class:{"ph-visible":this.visible,"ph-dialog-wrapper":!0}},h("div",{class:"ph-dialog"},h("div",{class:"ph-dialog-title"},this.dialogTitle),h("div",{class:"ph-dialog-content"},h("slot",null)),h("div",{class:"ph-dialog-button-container"},h("slot",{name:"footer"},h("ph-button",{type:"text",onClick:function(){return e.close()}},"Cancel"),h("ph-button",{onClick:function(){return e.close()}},"Okay"))),h("div",{class:"ph-close-button",onClick:function(){e.close()}},h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},h("path",{d:"M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"})))))},Object.defineProperty(e,"is",{get:function(){return"ph-dialog"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{close:{method:!0},dialogTitle:{type:String,attr:"dialog-title"},visible:{type:Boolean,attr:"visible",reflectToAttr:!0,mutable:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"window:keydown",method:"handleKeyDown"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{all:initial;font-size:16px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.ph-dialog-wrapper,:host{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif;font-family:var(--ph-body-font,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif)}.ph-dialog-wrapper{color:#51595f;color:var(--ph-body-color,#51595f);position:fixed;left:0;top:0;width:100%;height:100%;background-color:grey;opacity:0;visibility:hidden;-webkit-transform:scale(1.1);transform:scale(1.1);-webkit-transition:visibility 0s linear .25s,opacity .25s 0s,-webkit-transform .25s;transition:visibility 0s linear .25s,opacity .25s 0s,-webkit-transform .25s;transition:visibility 0s linear .25s,opacity .25s 0s,transform .25s;transition:visibility 0s linear .25s,opacity .25s 0s,transform .25s,-webkit-transform .25s;z-index:1}.ph-visible{opacity:1;visibility:visible;-webkit-transform:scale(1);transform:scale(1);-webkit-transition:visibility 0s linear 0s,opacity .25s 0s,-webkit-transform .25s;transition:visibility 0s linear 0s,opacity .25s 0s,-webkit-transform .25s;transition:visibility 0s linear 0s,opacity .25s 0s,transform .25s;transition:visibility 0s linear 0s,opacity .25s 0s,transform .25s,-webkit-transform .25s}.ph-dialog{padding:35px 35px 30px 35px;background-color:#fff;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);border-radius:2px;min-width:300px}.ph-dialog-title{font-size:18px}.ph-dialog-content,.ph-dialog-title{margin-bottom:1em}.ph-dialog-button-container{text-align:right}.ph-close-button{width:12px;height:12px;opacity:.5;cursor:pointer;position:absolute;top:25px;right:25px}"},enumerable:!0,configurable:!0}),e}();export{Button as PhButton,Dialog as PhDialog};