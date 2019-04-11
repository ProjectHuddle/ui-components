import { h } from '../project-huddle-ui.core.js';

class Draggable {
    constructor() {
        this.hasDragged = false;
        this.active = false;
        this.currentX = 0;
        this.currentY = 0;
        this.initialX = 0;
        this.initialY = 0;
        this.xOffset = 0;
        this.yOffset = 0;
        this.container = window;
        this.behavior = "fixed";
        this.dragStart = e => {
            if (e.type === "touchstart") {
                this.initialX = e.touches[0].clientX - this.xOffset;
                this.initialY = e.touches[0].clientY - this.yOffset;
            }
            else {
                this.initialX = e.clientX - this.xOffset;
                this.initialY = e.clientY - this.yOffset;
            }
            if (e.target.closest("ph-draggable") === this.el) {
                this.start.emit(this);
                this.active = true;
            }
        };
        this.dragEnd = () => {
            this.initialX = this.currentX;
            this.initialY = this.currentY;
            if (this.active) {
                this.end.emit(this);
            }
            this.active = false;
        };
        this.drag = e => {
            if (this.active) {
                e.preventDefault();
                this.hasDragged = true;
                if (e.type === "touchmove") {
                    this.currentX = e.touches[0].clientX - this.initialX;
                    this.currentY = e.touches[0].clientY - this.initialY;
                }
                else {
                    this.currentX = e.clientX - this.initialX;
                    this.currentY = e.clientY - this.initialY;
                }
                this.xOffset = this.currentX;
                this.yOffset = this.currentY;
                let rect = this.el.getBoundingClientRect();
                if ((rect.x < 0 && this.currentX < parseInt(this.el.dataset.currentX)) ||
                    (rect.x + rect.width > this.container.innerWidth &&
                        this.currentX > parseInt(this.el.dataset.currentX))) {
                    this.currentX = parseInt(this.el.dataset.currentX);
                }
                if ((rect.y < 0 && this.currentY < parseInt(this.el.dataset.currentY)) ||
                    (rect.y + rect.height > this.container.innerHeight &&
                        this.currentY > parseInt(this.el.dataset.currentY))) {
                    this.currentY = parseInt(this.el.dataset.currentY);
                }
                this.dragging.emit(this);
                this.el.style.transform =
                    "translate3d(" + this.currentX + "px, " + this.currentY + "px, 0)";
                this.el.dataset.currentX = this.currentX.toString();
                this.el.dataset.currentY = this.currentY.toString();
            }
        };
        this.maybeReset = () => {
            if (this.isOutsideContainer()) {
                this.reset();
            }
        };
        this.isOutsideContainer = () => {
            let rect = this.el.getBoundingClientRect();
            return (rect.x < 0 ||
                rect.y < 0 ||
                (rect.x + rect.width > this.container.innerWidth ||
                    rect.y + rect.height > this.container.innerHeight));
        };
        this.reset = () => {
            this.el.style.transform = "translate3d(0px, 0px, 0)";
            this.el.dataset.currentX = "0";
            this.el.dataset.currentY = "0";
            this.xOffset = 0;
            this.yOffset = 0;
        };
    }
    hostData() {
        return {
            class: {
                "ph-has-dragged-fixed": this.hasDragged && this.behavior == "fixed",
                "ph-has-dragged-absolute": this.hasDragged && this.behavior == "absolute"
            }
        };
    }
    componentWillLoad() {
        window.addEventListener("resize", this.maybeReset, false);
        this.container.addEventListener("touchstart", this.dragStart, false);
        this.container.addEventListener("touchend", this.dragEnd, false);
        this.container.addEventListener("touchmove", this.drag, false);
        this.container.addEventListener("mousedown", this.dragStart, false);
        this.container.addEventListener("mouseup", this.dragEnd, false);
        this.container.addEventListener("mousemove", this.drag, false);
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "ph-draggable"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "active": {
            "state": true
        },
        "behavior": {
            "type": String,
            "attr": "behavior"
        },
        "container": {
            "type": "Any",
            "attr": "container"
        },
        "currentX": {
            "state": true
        },
        "currentY": {
            "state": true
        },
        "el": {
            "elementRef": true
        },
        "hasDragged": {
            "state": true
        },
        "initialX": {
            "state": true
        },
        "initialY": {
            "state": true
        },
        "xOffset": {
            "state": true
        },
        "yOffset": {
            "state": true
        }
    }; }
    static get events() { return [{
            "name": "start",
            "method": "start",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "dragging",
            "method": "dragging",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "end",
            "method": "end",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return ".ph-has-dragged-absolute.sc-ph-draggable-h, .ph-has-dragged-fixed.sc-ph-draggable-h{position:fixed}"; }
}

export { Draggable as PhDraggable };
