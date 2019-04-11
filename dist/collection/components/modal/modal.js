export class Modal {
    constructor() {
        this.modalTitle = "Alert";
    }
    async close() {
        this.visible = false;
        return false;
    }
    handleKeyDown(ev) {
        if (ev.key === "Escape") {
            this.close();
        }
    }
    render() {
        let classNames = {
            "ph-visible": this.visible,
            "ph-modal-wrapper": true
        };
        return (h("div", { class: classNames },
            h("div", { class: "ph-modal" },
                h("div", { class: "ph-modal-content" },
                    h("slot", null),
                    h("div", { class: "ph-close-button", onClick: () => {
                            this.close();
                        } },
                        h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
                            h("path", { d: "M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z" })))))));
    }
    static get is() { return "ph-modal"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "close": {
            "method": true
        },
        "modalTitle": {
            "type": String,
            "attr": "modal-title"
        },
        "visible": {
            "type": Boolean,
            "attr": "visible",
            "reflectToAttr": true,
            "mutable": true
        }
    }; }
    static get listeners() { return [{
            "name": "window:keydown",
            "method": "handleKeyDown"
        }]; }
    static get style() { return "/**style-placeholder:ph-modal:**/"; }
}
