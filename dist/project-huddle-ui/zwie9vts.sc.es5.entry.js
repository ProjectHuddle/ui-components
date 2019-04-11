ProjectHuddleUi.loadBundle("zwie9vts",["exports","./chunk-e46aef79.js"],function(e,t){var i=window.ProjectHuddleUi.h,o=function(){function e(){this.content="",this.trigger="hover",this.placement="top",this.openDelay=0,this.closeDelay=300,this.offset="0, 20",this.visible=!1}return e.prototype.componentWillLoad=function(){switch(this.reference=this.el.querySelectorAll("[slot=reference]")[0],this.closers=this.el.querySelectorAll("[ph-close-popover]"),this.slotEvents(),this.closeEvents(),this.trigger){case"hover":this.hoverEvents(),this.clickOutSide();break;case"click":this.clickEvents(),this.clickOutSide()}},e.prototype.componentDidLoad=function(){this.visible&&this.initPopper()},e.prototype.slotEvents=function(){switch(this.trigger){case"hover":this.hoverEvents(),this.clickOutSide();break;case"click":this.clickEvents(),this.clickOutSide()}},e.prototype.closeEvents=function(){for(var e=this,t=0;t<this.closers.length;t++)this.closers[t].addEventListener("click",function(){e.visible=!e.visible})},e.prototype.hoverEvents=function(){var e=this;this.reference.addEventListener("mouseenter",function(){return e.handleMouseEnter()}),this.reference.addEventListener("mouseleave",function(){return e.handleMouseLeave()})},e.prototype.clickEvents=function(){var e=this;this.reference.addEventListener("click",function(){e.visible=!e.visible})},e.prototype.clickOutSide=function(){var e=this;document.addEventListener("click",function(t){t.target.closest("ph-popover")||(e.visible=!1)})},e.prototype.handleMouseEnter=function(){var e=this;clearTimeout(this.timer),this.openDelay?this.timer=setTimeout(function(){e.visible=!0},this.openDelay):this.visible=!0},e.prototype.handleMouseLeave=function(){var e=this;"hover"===this.trigger&&(this.closeDelay?this.timer=setTimeout(function(){e.visible=!1},this.closeDelay):this.visible=!1)},e.prototype.initPopper=function(){var e=this;this.popper=new t.Popper(this.reference,this.bubble,{placement:this.placement,modifiers:{offset:{enabled:!0,offset:this.offset}},onCreate:function(){e.bubble.style.visibility="visible",e.bubble.style.opacity="1"}})},e.prototype.watchPopperHandler=function(e){e?(this.show.emit(this),this.initPopper()):(this.bubble.style.visibility="hidden",this.bubble.style.opacity="0",this.hide.emit(this))},e.prototype.updatePopper=function(){this.popper.update()},e.prototype.render=function(){var e=this;return i("div",{class:"ph-popover-wrapper"},i("div",{onMouseEnter:function(){return e.handleMouseEnter()},onMouseLeave:function(){return e.handleMouseLeave()},class:{"ph-popover popper":!0,"ph-show":this.visible},role:"tooltip",ref:function(t){return e.bubble=t}},i("slot",null,this.content),i("div",{"x-arrow":!0})),i("slot",{name:"reference"}))},Object.defineProperty(e,"is",{get:function(){return"ph-popover"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{clickEvents:{method:!0},clickOutSide:{method:!0},closeDelay:{type:Number,attr:"close-delay"},closeEvents:{method:!0},closers:{state:!0},content:{type:String,attr:"content"},el:{elementRef:!0},handleMouseEnter:{method:!0},handleMouseLeave:{method:!0},hoverEvents:{method:!0},initPopper:{method:!0},offset:{type:String,attr:"offset"},openDelay:{type:Number,attr:"open-delay"},placement:{type:String,attr:"placement"},popper:{state:!0},reference:{state:!0},slotEvents:{method:!0},trigger:{type:String,attr:"trigger"},updatePopper:{method:!0},visible:{type:Boolean,attr:"visible",reflectToAttr:!0,mutable:!0,watchCallbacks:["watchPopperHandler"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"show",method:"show",bubbles:!0,cancelable:!0,composed:!0},{name:"hide",method:"hide",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ph-popover-h{all:initial;font-size:16px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif;font-family:var(--ph-body-font,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif)}.ph-popover.sc-ph-popover{font-size:13px;position:absolute;overflow:visible;text-align:left;color:#51595f;max-width:400px!important;min-width:150px;display:block;padding-top:3px;background:#fff;z-index:2015;-webkit-box-shadow:0 0 0 1px rgba(35,40,45,.12),0 0 3px rgba(0,0,0,.2);box-shadow:0 0 0 1px rgba(35,40,45,.12),0 0 3px rgba(0,0,0,.2);cursor:auto;-webkit-user-select:\"text\";-moz-user-select:\"text\";-ms-user-select:\"text\";user-select:\"text\";padding:20px;border-radius:2px;visibility:hidden;opacity:0;-webkit-transition:opacity .1s,visibility .1s;transition:opacity .1s,visibility .1s}.ph-popover .sc-ph-popover-s > :first-child{margin-top:0}.ph-popover .sc-ph-popover-s > :nth-last-child(2){margin-bottom:0}.ph-popover.ph-show.sc-ph-popover{opacity:1;visibility:visible}.ph-popover-wrapper.sc-ph-popover{display:inline-block}.ph-popover-wrapper.sc-ph-popover:hover   .ph-popover.sc-ph-popover{z-index:2016}[x-arrow].sc-ph-popover, [x-arrow].sc-ph-popover:after{position:absolute}[x-arrow].sc-ph-popover:after{content:\"\";width:8px;height:8px;background:#fff;-webkit-transform:translateX(-50%) translateY(-50%) rotate(45deg);transform:translateX(-50%) translateY(-50%) rotate(-45deg);top:0;left:50%;-webkit-box-shadow:0 0 0 1px rgba(35,40,45,.12),0 0 3px rgba(0,0,0,.2);box-shadow:0 0 0 1px rgba(35,40,45,.12),0 0 3px rgba(0,0,0,.2)}.ph-popover[x-placement=bottom-end].sc-ph-popover   [x-arrow].sc-ph-popover, .ph-popover[x-placement=bottom-start].sc-ph-popover   [x-arrow].sc-ph-popover, .ph-popover[x-placement=bottom].sc-ph-popover   [x-arrow].sc-ph-popover{width:12px;height:12px;position:absolute;top:-12px;-webkit-transform:rotate(-180deg);transform:rotate(-180deg);overflow:hidden}.ph-popover[x-placement=top-end].sc-ph-popover   [x-arrow].sc-ph-popover, .ph-popover[x-placement=top-start].sc-ph-popover   [x-arrow].sc-ph-popover, .ph-popover[x-placement=top].sc-ph-popover   [x-arrow].sc-ph-popover{width:12px;height:12px;position:absolute;bottom:-12px;overflow:hidden}.ph-popover[x-placement=left-end].sc-ph-popover   [x-arrow].sc-ph-popover, .ph-popover[x-placement=left-start].sc-ph-popover   [x-arrow].sc-ph-popover, .ph-popover[x-placement=left].sc-ph-popover   div[x-arrow].sc-ph-popover{width:12px;height:12px;position:absolute;right:-12px;margin-top:6px;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);overflow:hidden}.ph-popover[x-placement=right-end].sc-ph-popover   [x-arrow].sc-ph-popover, .ph-popover[x-placement=right-start].sc-ph-popover   [x-arrow].sc-ph-popover, .ph-popover[x-placement=right].sc-ph-popover   [x-arrow].sc-ph-popover{width:12px;height:12px;position:absolute;left:-12px;margin-top:6px;-webkit-transform:rotate(90deg);transform:rotate(90deg);overflow:hidden}"},enumerable:!0,configurable:!0}),e}();e.PhPopover=o,Object.defineProperty(e,"__esModule",{value:!0})});