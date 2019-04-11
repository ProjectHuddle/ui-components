export class Dialog {
    constructor() {
        this.dialogTitle = "Alert";
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
            "ph-dialog-wrapper": true
        };
        return (h("div", { class: classNames },
            h("div", { class: "ph-dialog" },
                h("div", { class: "ph-dialog-title" }, this.dialogTitle),
                h("div", { class: "ph-dialog-content" },
                    h("slot", null)),
                h("div", { class: "ph-dialog-button-container" },
                    h("slot", { name: "footer" },
                        h("ph-button", { type: "text", onClick: () => this.close() }, "Cancel"),
                        h("ph-button", { onClick: () => this.close() }, "Okay"))),
                h("div", { class: "ph-close-button", onClick: () => {
                        this.close();
                    } },
                    h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
                        h("path", { d: "M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z" }))))));
    }
    static get is() { return "ph-dialog"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "close": {
            "method": true
        },
        "dialogTitle": {
            "type": String,
            "attr": "dialog-title"
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
    static get style() { return "/**style-placeholder:ph-dialog:**/"; }
}
