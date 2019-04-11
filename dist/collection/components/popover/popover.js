import Popper from "popper.js";
export class Popover {
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
                this.visible = !this.visible;
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
    static get style() { return "/**style-placeholder:ph-popover:**/"; }
}
