import { h } from '../project-huddle-ui.core.js';

import { a as Popper } from './chunk-e3abbe69.js';

class Popover {
    constructor() {
        this.content = "";
        this.trigger = "hover";
        this.placement = "top";
        this.openDelay = 0;
        this.closeDelay = 300;
        this.offset = "0, 20";
        this.visible = false;
    }
    componentWillLoad() {
        this.reference = this.el.querySelectorAll("[slot=reference]")[0];
        this.closers = this.el.querySelectorAll("[ph-close-popover]");
        this.slotEvents();
        this.closeEvents();
        switch (this.trigger) {
            case "hover":
                this.hoverEvents();
                this.clickOutSide();
                break;
            case "click":
                this.clickEvents();
                this.clickOutSide();
                break;
        }
    }
    componentDidLoad() {
        this.visible && this.initPopper();
    }
    slotEvents() {
        switch (this.trigger) {
            case "hover":
                this.hoverEvents();
                this.clickOutSide();
                break;
            case "click":
                this.clickEvents();
                this.clickOutSide();
                break;
        }
    }
    closeEvents() {
        for (var i = 0; i < this.closers.length; i++) {
            this.closers[i].addEventListener("click", () => {
                this.visible = false;
            });
        }
    }
    hoverEvents() {
        this.reference.addEventListener("mouseenter", () => this.handleMouseEnter());
        this.reference.addEventListener("mouseleave", () => this.handleMouseLeave());
    }
    clickEvents() {
        this.reference.addEventListener("click", () => {
            this.visible = !this.visible;
        });
    }
    clickOutSide() {
        document.addEventListener("click", e => {
            let target = e.target;
            if (target.closest("ph-popover"))
                return;
            this.visible = false;
        });
    }
    handleMouseEnter() {
        clearTimeout(this.timer);
        if (this.openDelay) {
            this.timer = setTimeout(() => {
                this.visible = true;
            }, this.openDelay);
        }
        else {
            this.visible = true;
        }
    }
    handleMouseLeave() {
        if (this.trigger !== "hover") {
            return;
        }
        if (this.closeDelay) {
            this.timer = setTimeout(() => {
                this.visible = false;
            }, this.closeDelay);
        }
        else {
            this.visible = false;
        }
    }
    initPopper() {
        this.popper = new Popper(this.reference, this.bubble, {
            placement: this.placement,
            modifiers: {
                offset: {
                    enabled: true,
                    offset: this.offset
                }
            },
            onCreate: () => {
                this.bubble.style.visibility = "visible";
                this.bubble.style.opacity = "1";
            }
        });
    }
    watchPopperHandler(newValue) {
        if (newValue) {
            this.show.emit(this);
            this.initPopper();
        }
        else {
            this.bubble.style.visibility = "hidden";
            this.bubble.style.opacity = "0";
            this.hide.emit(this);
        }
    }
    updatePopper() {
        this.popper.update();
    }
    render() {
        var classes = {
            "ph-popover popper": true,
            "ph-show": this.visible
        };
        return (h("div", { class: "ph-popover-wrapper" },
            h("div", { onMouseEnter: () => this.handleMouseEnter(), onMouseLeave: () => this.handleMouseLeave(), class: classes, role: "tooltip", ref: el => (this.bubble = el) },
                h("slot", null, this.content),
                h("div", { "x-arrow": true })),
            h("slot", { name: "reference" })));
    }
    static get is() { return "ph-popover"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "clickEvents": {
            "method": true
        },
        "clickOutSide": {
            "method": true
        },
        "closeDelay": {
            "type": Number,
            "attr": "close-delay"
        },
        "closeEvents": {
            "method": true
        },
        "closers": {
            "state": true
        },
        "content": {
            "type": String,
            "attr": "content"
        },
        "el": {
            "elementRef": true
        },
        "handleMouseEnter": {
            "method": true
        },
        "handleMouseLeave": {
            "method": true
        },
        "hoverEvents": {
            "method": true
        },
        "initPopper": {
            "method": true
        },
        "offset": {
            "type": String,
            "attr": "offset"
        },
        "openDelay": {
            "type": Number,
            "attr": "open-delay"
        },
        "placement": {
            "type": String,
            "attr": "placement"
        },
        "popper": {
            "state": true
        },
        "reference": {
            "state": true
        },
        "slotEvents": {
            "method": true
        },
        "trigger": {
            "type": String,
            "attr": "trigger"
        },
        "updatePopper": {
            "method": true
        },
        "visible": {
            "type": Boolean,
            "attr": "visible",
            "reflectToAttr": true,
            "mutable": true,
            "watchCallbacks": ["watchPopperHandler"]
        }
    }; }
    static get events() { return [{
            "name": "show",
            "method": "show",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "hide",
            "method": "hide",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return ".sc-ph-popover-h{all:initial;font-size:16px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif;font-family:var(--ph-body-font,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif)}.ph-popover.sc-ph-popover{font-size:13px;position:absolute;overflow:visible;text-align:left;color:#51595f;max-width:400px!important;min-width:150px;display:block;padding-top:3px;background:#fff;z-index:2015;-webkit-box-shadow:0 0 0 1px rgba(35,40,45,.12),0 0 3px rgba(0,0,0,.2);box-shadow:0 0 0 1px rgba(35,40,45,.12),0 0 3px rgba(0,0,0,.2);cursor:auto;-webkit-user-select:\"text\";-moz-user-select:\"text\";-ms-user-select:\"text\";user-select:\"text\";padding:20px;border-radius:2px;visibility:hidden;opacity:0;-webkit-transition:opacity .1s,visibility .1s;transition:opacity .1s,visibility .1s}.ph-popover .sc-ph-popover-s > :first-child{margin-top:0}.ph-popover .sc-ph-popover-s > :nth-last-child(2){margin-bottom:0}.ph-popover.ph-show.sc-ph-popover{opacity:1;visibility:visible}.ph-popover-wrapper.sc-ph-popover{display:inline-block}.ph-popover-wrapper.sc-ph-popover:hover   .ph-popover.sc-ph-popover{z-index:2016}[x-arrow].sc-ph-popover, [x-arrow].sc-ph-popover:after{position:absolute}[x-arrow].sc-ph-popover:after{content:\"\";width:8px;height:8px;background:#fff;-webkit-transform:translateX(-50%) translateY(-50%) rotate(45deg);transform:translateX(-50%) translateY(-50%) rotate(-45deg);top:0;left:50%;-webkit-box-shadow:0 0 0 1px rgba(35,40,45,.12),0 0 3px rgba(0,0,0,.2);box-shadow:0 0 0 1px rgba(35,40,45,.12),0 0 3px rgba(0,0,0,.2)}.ph-popover[x-placement=bottom-end].sc-ph-popover   [x-arrow].sc-ph-popover, .ph-popover[x-placement=bottom-start].sc-ph-popover   [x-arrow].sc-ph-popover, .ph-popover[x-placement=bottom].sc-ph-popover   [x-arrow].sc-ph-popover{width:12px;height:12px;position:absolute;top:-12px;-webkit-transform:rotate(-180deg);transform:rotate(-180deg);overflow:hidden}.ph-popover[x-placement=top-end].sc-ph-popover   [x-arrow].sc-ph-popover, .ph-popover[x-placement=top-start].sc-ph-popover   [x-arrow].sc-ph-popover, .ph-popover[x-placement=top].sc-ph-popover   [x-arrow].sc-ph-popover{width:12px;height:12px;position:absolute;bottom:-12px;overflow:hidden}.ph-popover[x-placement=left-end].sc-ph-popover   [x-arrow].sc-ph-popover, .ph-popover[x-placement=left-start].sc-ph-popover   [x-arrow].sc-ph-popover, .ph-popover[x-placement=left].sc-ph-popover   div[x-arrow].sc-ph-popover{width:12px;height:12px;position:absolute;right:-12px;margin-top:6px;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);overflow:hidden}.ph-popover[x-placement=right-end].sc-ph-popover   [x-arrow].sc-ph-popover, .ph-popover[x-placement=right-start].sc-ph-popover   [x-arrow].sc-ph-popover, .ph-popover[x-placement=right].sc-ph-popover   [x-arrow].sc-ph-popover{width:12px;height:12px;position:absolute;left:-12px;margin-top:6px;-webkit-transform:rotate(90deg);transform:rotate(90deg);overflow:hidden}"; }
}

export { Popover as PhPopover };
