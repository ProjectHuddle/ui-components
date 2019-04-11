const t=window.ProjectHuddleUi.h;class e{constructor(){this.hasDragged=!1,this.active=!1,this.currentX=0,this.currentY=0,this.initialX=0,this.initialY=0,this.xOffset=0,this.yOffset=0,this.container=window,this.behavior="fixed",this.dragStart=(t=>{"touchstart"===t.type?(this.initialX=t.touches[0].clientX-this.xOffset,this.initialY=t.touches[0].clientY-this.yOffset):(this.initialX=t.clientX-this.xOffset,this.initialY=t.clientY-this.yOffset),t.target.closest("ph-draggable")===this.el&&(this.start.emit(this),this.active=!0)}),this.dragEnd=(()=>{this.initialX=this.currentX,this.initialY=this.currentY,this.active&&this.end.emit(this),this.active=!1}),this.drag=(t=>{if(this.active){t.preventDefault(),this.hasDragged=!0,"touchmove"===t.type?(this.currentX=t.touches[0].clientX-this.initialX,this.currentY=t.touches[0].clientY-this.initialY):(this.currentX=t.clientX-this.initialX,this.currentY=t.clientY-this.initialY),this.xOffset=this.currentX,this.yOffset=this.currentY;let e=this.el.getBoundingClientRect();(e.x<0&&this.currentX<parseInt(this.el.dataset.currentX)||e.x+e.width>this.container.innerWidth&&this.currentX>parseInt(this.el.dataset.currentX))&&(this.currentX=parseInt(this.el.dataset.currentX)),(e.y<0&&this.currentY<parseInt(this.el.dataset.currentY)||e.y+e.height>this.container.innerHeight&&this.currentY>parseInt(this.el.dataset.currentY))&&(this.currentY=parseInt(this.el.dataset.currentY)),this.dragging.emit(this),this.el.style.transform="translate3d("+this.currentX+"px, "+this.currentY+"px, 0)",this.el.dataset.currentX=this.currentX.toString(),this.el.dataset.currentY=this.currentY.toString()}}),this.maybeReset=(()=>{this.isOutsideContainer()&&this.reset()}),this.isOutsideContainer=(()=>{let t=this.el.getBoundingClientRect();return t.x<0||t.y<0||t.x+t.width>this.container.innerWidth||t.y+t.height>this.container.innerHeight}),this.reset=(()=>{this.el.style.transform="translate3d(0px, 0px, 0)",this.el.dataset.currentX="0",this.el.dataset.currentY="0",this.xOffset=0,this.yOffset=0})}hostData(){return{class:{"ph-has-dragged-fixed":this.hasDragged&&"fixed"==this.behavior,"ph-has-dragged-absolute":this.hasDragged&&"absolute"==this.behavior}}}componentWillLoad(){window.addEventListener("resize",this.maybeReset,!1),this.container.addEventListener("touchstart",this.dragStart,!1),this.container.addEventListener("touchend",this.dragEnd,!1),this.container.addEventListener("touchmove",this.drag,!1),this.container.addEventListener("mousedown",this.dragStart,!1),this.container.addEventListener("mouseup",this.dragEnd,!1),this.container.addEventListener("mousemove",this.drag,!1)}render(){return t("slot",null)}static get is(){return"ph-draggable"}static get encapsulation(){return"shadow"}static get properties(){return{active:{state:!0},behavior:{type:String,attr:"behavior"},container:{type:"Any",attr:"container"},currentX:{state:!0},currentY:{state:!0},el:{elementRef:!0},hasDragged:{state:!0},initialX:{state:!0},initialY:{state:!0},xOffset:{state:!0},yOffset:{state:!0}}}static get events(){return[{name:"start",method:"start",bubbles:!0,cancelable:!0,composed:!0},{name:"dragging",method:"dragging",bubbles:!0,cancelable:!0,composed:!0},{name:"end",method:"end",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return":host(.ph-has-dragged-absolute),:host(.ph-has-dragged-fixed){position:fixed}"}}export{e as PhDraggable};