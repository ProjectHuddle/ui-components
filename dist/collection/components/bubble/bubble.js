import Popper from "popper.js";
export class Bubble {
    constructor() {
        this.startingY = 0;
        this.startingX = 0;
        this.hovered = false;
        this.show = false;
        this.resolved = false;
        this.order = 1;
        this.x = 0;
        this.y = 0;
        this.dragStart = (e) => {
            if (e.stopPropagation) {
                e.stopPropagation();
            }
            if (e.preventDefault) {
                e.preventDefault();
            }
            this.startingY = e.clientY;
            this.startingX = e.clientX;
            this.start.emit(e);
            this.hovered = false;
            this.show = !this.show;
            window.addEventListener("mousemove", this.dragMove);
            this.reference.addEventListener("mouseup", this.dragEnd);
        };
        this.dragEnd = (e) => {
            window.removeEventListener("mousemove", this.dragMove);
            this.reference.removeEventListener("mouseup", this.dragEnd);
            this.dropped.emit(e);
            if (e.stopPropagation) {
                e.stopPropagation();
            }
            if (e.preventDefault) {
                e.preventDefault();
            }
        };
        this.dragMove = (e) => {
            var math = Math.round(Math.sqrt(Math.pow(this.startingY - e.clientY, 2) +
                Math.pow(this.startingX - e.clientX, 2)));
            if (math <= 10) {
                return;
            }
            this.y = e.pageY > 0 ? e.pageY : 0;
            this.x = e.pageX > 0 ? e.pageX : 0;
            this.popper.update();
            this.move.emit(e);
            this.reference.addEventListener("mouseup", this.dragEnd);
            document.addEventListener("mouseleave", this.dragEnd);
        };
    }
    componentDidLoad() {
        this.popper = new Popper(this.reference, this.bubble, {
            placement: "bottom-start",
            modifiers: {
                preventOverflow: {
                    boundariesElement: "window"
                },
                offset: {
                    enabled: true,
                    offset: "0, 15"
                }
            }
        });
    }
    toggleShow() {
        this.show = !this.show;
    }
    render() {
        var styles = {
            top: this.y + "px",
            left: this.x + "px",
            bottom: "0px",
            right: "0px"
        };
        var bubbleClasses = {
            "ph-bubble-wrapper": true,
            "ph-show": this.show,
            "ph-hover": this.hovered
        };
        var dotClasses = {
            "ph-dot": true,
            "ph-show": this.show,
            "ph-hover": this.hovered
        };
        return (h("div", { class: bubbleClasses, onMouseEnter: () => {
                clearTimeout(this.timeout);
                this.hovered = true;
            }, onMouseLeave: () => (this.timeout = setTimeout(() => {
                this.hovered = false;
            }, 750)), onMouseDown: () => (this.show = true) },
            h("slot", { name: "dot" },
                h("ph-dot", { style: styles, class: dotClasses, onMouseDown: this.dragStart, ref: el => (this.reference = el), resolved: this.resolved }, this.order)),
            h("div", { ref: el => (this.bubble = el), class: "ph-bubble" },
                h("slot", null),
                h("div", { class: "ph-close-button", onClick: () => {
                        this.show = false;
                        this.hovered = false;
                    } },
                    h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
                        h("path", { d: "M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z" }))),
                h("div", { "x-arrow": true }))));
    }
    static get is() { return "ph-bubble"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "el": {
            "elementRef": true
        },
        "hovered": {
            "state": true
        },
        "order": {
            "type": Number,
            "attr": "order"
        },
        "resolved": {
            "type": Boolean,
            "attr": "resolved"
        },
        "show": {
            "type": Boolean,
            "attr": "show",
            "mutable": true
        },
        "startingX": {
            "state": true
        },
        "startingY": {
            "state": true
        },
        "toggleShow": {
            "method": true
        },
        "x": {
            "type": Number,
            "attr": "x",
            "mutable": true
        },
        "y": {
            "type": Number,
            "attr": "y",
            "mutable": true
        }
    }; }
    static get events() { return [{
            "name": "start",
            "method": "start",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "move",
            "method": "move",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "dropped",
            "method": "dropped",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:ph-bubble:**/"; }
}
