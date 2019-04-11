ProjectHuddleUi.loadBundle("f5t51igr",["exports"],function(e){var t=window.ProjectHuddleUi.h,n=function(){function e(){var e=this;this.hasDragged=!1,this.active=!1,this.currentX=0,this.currentY=0,this.initialX=0,this.initialY=0,this.xOffset=0,this.yOffset=0,this.container=window,this.behavior="fixed",this.dragStart=function(t){"touchstart"===t.type?(e.initialX=t.touches[0].clientX-e.xOffset,e.initialY=t.touches[0].clientY-e.yOffset):(e.initialX=t.clientX-e.xOffset,e.initialY=t.clientY-e.yOffset),t.target.closest("ph-draggable")===e.el&&(e.start.emit(e),e.active=!0)},this.dragEnd=function(){e.initialX=e.currentX,e.initialY=e.currentY,e.active&&e.end.emit(e),e.active=!1},this.drag=function(t){if(e.active){t.preventDefault(),e.hasDragged=!0,"touchmove"===t.type?(e.currentX=t.touches[0].clientX-e.initialX,e.currentY=t.touches[0].clientY-e.initialY):(e.currentX=t.clientX-e.initialX,e.currentY=t.clientY-e.initialY),e.xOffset=e.currentX,e.yOffset=e.currentY;var n=e.el.getBoundingClientRect();(n.x<0&&e.currentX<parseInt(e.el.dataset.currentX)||n.x+n.width>e.container.innerWidth&&e.currentX>parseInt(e.el.dataset.currentX))&&(e.currentX=parseInt(e.el.dataset.currentX)),(n.y<0&&e.currentY<parseInt(e.el.dataset.currentY)||n.y+n.height>e.container.innerHeight&&e.currentY>parseInt(e.el.dataset.currentY))&&(e.currentY=parseInt(e.el.dataset.currentY)),e.dragging.emit(e),e.el.style.transform="translate3d("+e.currentX+"px, "+e.currentY+"px, 0)",e.el.dataset.currentX=e.currentX.toString(),e.el.dataset.currentY=e.currentY.toString()}},this.maybeReset=function(){e.isOutsideContainer()&&e.reset()},this.isOutsideContainer=function(){var t=e.el.getBoundingClientRect();return t.x<0||t.y<0||t.x+t.width>e.container.innerWidth||t.y+t.height>e.container.innerHeight},this.reset=function(){e.el.style.transform="translate3d(0px, 0px, 0)",e.el.dataset.currentX="0",e.el.dataset.currentY="0",e.xOffset=0,e.yOffset=0}}return e.prototype.hostData=function(){return{class:{"ph-has-dragged-fixed":this.hasDragged&&"fixed"==this.behavior,"ph-has-dragged-absolute":this.hasDragged&&"absolute"==this.behavior}}},e.prototype.componentWillLoad=function(){window.addEventListener("resize",this.maybeReset,!1),this.container.addEventListener("touchstart",this.dragStart,!1),this.container.addEventListener("touchend",this.dragEnd,!1),this.container.addEventListener("touchmove",this.drag,!1),this.container.addEventListener("mousedown",this.dragStart,!1),this.container.addEventListener("mouseup",this.dragEnd,!1),this.container.addEventListener("mousemove",this.drag,!1)},e.prototype.render=function(){return t("slot",null)},Object.defineProperty(e,"is",{get:function(){return"ph-draggable"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{active:{state:!0},behavior:{type:String,attr:"behavior"},container:{type:"Any",attr:"container"},currentX:{state:!0},currentY:{state:!0},el:{elementRef:!0},hasDragged:{state:!0},initialX:{state:!0},initialY:{state:!0},xOffset:{state:!0},yOffset:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"start",method:"start",bubbles:!0,cancelable:!0,composed:!0},{name:"dragging",method:"dragging",bubbles:!0,cancelable:!0,composed:!0},{name:"end",method:"end",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".ph-has-dragged-absolute.sc-ph-draggable-h, .ph-has-dragged-fixed.sc-ph-draggable-h{position:fixed}"},enumerable:!0,configurable:!0}),e}();e.PhDraggable=n,Object.defineProperty(e,"__esModule",{value:!0})});