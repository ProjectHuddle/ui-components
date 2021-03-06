import { h } from '../project-huddle-ui.core.js';

import { a as Popper } from './chunk-e3abbe69.js';

class Bubble {
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
    static get style() { return ".sc-ph-bubble-h{all:initial;font-size:16px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif;font-family:var(--ph-body-font,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif)}.ph-bubble.sc-ph-bubble, .sc-ph-bubble-h{-webkit-box-sizing:border-box;box-sizing:border-box}.ph-bubble.sc-ph-bubble{overflow:visible;text-align:left;color:#51595f;width:100vw;max-width:400px!important;display:block;padding-top:3px;position:relative;background:#fff;z-index:2;-webkit-box-shadow:0 0 0 1px rgba(35,40,45,.12),0 0 3px rgba(0,0,0,.2);box-shadow:0 0 0 1px rgba(35,40,45,.12),0 0 3px rgba(0,0,0,.2);cursor:auto;-webkit-user-select:\"text\";-moz-user-select:\"text\";-ms-user-select:\"text\";user-select:\"text\";padding:30px;border-radius:2px;opacity:0;visibility:hidden;-webkit-transition:opacity .1s,visibility .1s;transition:opacity .1s,visibility .1s}.ph-show.sc-ph-bubble   .ph-bubble.sc-ph-bubble{z-index:300;opacity:1;visibility:visible}.ph-hover.sc-ph-bubble   .ph-bubble.sc-ph-bubble{z-index:301;opacity:1;visibility:visible}.ph-close-button.sc-ph-bubble{width:12px;height:12px;opacity:.5;cursor:pointer;top:25px;right:25px}.ph-close-button.sc-ph-bubble, [x-arrow].sc-ph-bubble, [x-arrow].sc-ph-bubble:after{position:absolute}[x-arrow].sc-ph-bubble:after{content:\"\";width:8px;height:8px;background:#fff;-webkit-transform:translateX(-50%) translateY(-50%) rotate(45deg);transform:translateX(-50%) translateY(-50%) rotate(-45deg);top:0;left:50%;-webkit-box-shadow:0 0 0 1px rgba(35,40,45,.12),0 0 3px rgba(0,0,0,.2);box-shadow:0 0 0 1px rgba(35,40,45,.12),0 0 3px rgba(0,0,0,.2)}.ph-bubble[x-placement=bottom-end].sc-ph-bubble   [x-arrow].sc-ph-bubble, .ph-bubble[x-placement=bottom-start].sc-ph-bubble   [x-arrow].sc-ph-bubble, .ph-bubble[x-placement=bottom].sc-ph-bubble   [x-arrow].sc-ph-bubble{width:12px;height:12px;position:absolute;top:-12px;-webkit-transform:rotate(-180deg);transform:rotate(-180deg);overflow:hidden}.ph-bubble[x-placement=top-end].sc-ph-bubble   [x-arrow].sc-ph-bubble, .ph-bubble[x-placement=top-start].sc-ph-bubble   [x-arrow].sc-ph-bubble, .ph-bubble[x-placement=top].sc-ph-bubble   [x-arrow].sc-ph-bubble{width:12px;height:12px;position:absolute;bottom:-12px;overflow:hidden}.ph-bubble[x-placement=left-end].sc-ph-bubble   [x-arrow].sc-ph-bubble, .ph-bubble[x-placement=left-start].sc-ph-bubble   [x-arrow].sc-ph-bubble, .ph-bubble[x-placement=left].sc-ph-bubble   div[x-arrow].sc-ph-bubble{width:12px;height:12px;position:absolute;right:-12px;margin-top:6px;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);overflow:hidden}.ph-bubble[x-placement=right-end].sc-ph-bubble   [x-arrow].sc-ph-bubble, .ph-bubble[x-placement=right-start].sc-ph-bubble   [x-arrow].sc-ph-bubble, .ph-bubble[x-placement=right].sc-ph-bubble   [x-arrow].sc-ph-bubble{width:12px;height:12px;position:absolute;left:-12px;margin-top:6px;-webkit-transform:rotate(90deg);transform:rotate(90deg);overflow:hidden}"; }
}

class Dot {
    constructor() {
        this.resolved = false;
    }
    render() {
        return (h("div", { class: "ph-dot" },
            h("slot", null)));
    }
    static get is() { return "ph-dot"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "resolved": {
            "type": Boolean,
            "attr": "resolved"
        }
    }; }
    static get style() { return ".sc-ph-dot-h{all:initial;font-size:16px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif;font-family:var(--ph-body-font,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif);position:absolute;width:36px;height:36px;margin-top:-18px;margin-left:-18px;background:#4353ff;background:var(--ph-accent-color,#4353ff);border:3px solid #fff;border-radius:100%;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.5);box-shadow:0 1px 3px rgba(0,0,0,.5);text-align:center;line-height:30px;font-size:14px;font-weight:800;color:#fff;cursor:pointer;z-index:2147483647;font-family:Helvetica,Arial,sans-serif;-webkit-transition:background .35s ease;transition:background .35s ease;-webkit-box-sizing:border-box;box-sizing:border-box;opacity:.5;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transition:opacity .1s,visibility .1s;transition:opacity .1s,visibility .1s}.ph-hover.sc-ph-dot-h{z-index:301;opacity:1;visibility:visible}.ph-show.sc-ph-dot-h{z-index:300;opacity:1;visibility:visible}"; }
}

export { Bubble as PhBubble, Dot as PhDot };
