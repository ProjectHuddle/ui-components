import { h } from '../project-huddle-ui.core.js';

class Button {
    constructor() {
        this.type = "default";
        this.size = "normal";
        this.circled = false;
        this.rounded = false;
    }
    render() {
        let classes = {
            "ph-button": true,
            [`ph-button__${this.type}`]: true,
            [`ph-button__size--${this.size}`]: true,
            "ph-button__style--circled": this.circled,
            "ph-button__style--rounded": this.rounded
        };
        return (h("div", { class: classes },
            h("slot", null)));
    }
    static get is() { return "ph-button"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "circled": {
            "type": Boolean,
            "attr": "circled"
        },
        "rounded": {
            "type": Boolean,
            "attr": "rounded"
        },
        "size": {
            "type": String,
            "attr": "size"
        },
        "type": {
            "type": String,
            "attr": "type"
        }
    }; }
    static get style() { return ":host{all:initial;font-size:16px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif;font-family:var(--ph-body-font,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif)}.ph-button,:host{-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block}.ph-button{padding:16px 22px;background:transparent;color:#4353ff;color:var(--ph-accent-color,#4353ff);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:2px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;text-decoration:none;text-align:center;padding:15px 20px;border:2px solid transparent;border-color:#4353ff;border-color:var(--ph-accent-color,#4353ff);cursor:pointer;-webkit-transition:opacity .25s ease,color .25s ease,background .25s ease,-webkit-transform .25s ease;transition:opacity .25s ease,color .25s ease,background .25s ease,-webkit-transform .25s ease;transition:opacity .25s ease,color .25s ease,transform .25s ease,background .25s ease;transition:opacity .25s ease,color .25s ease,transform .25s ease,background .25s ease,-webkit-transform .25s ease}.ph-button:hover{background:#4353ff;background:var(--ph-accent-color,#4353ff);color:#fff}.ph-button__style--rounded{border-radius:99999px}.ph-button__style--circled{border-radius:50%;min-height:40px;min-width:40px;padding:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;line-height:36px;text-align:center}.ph-button__size--large{padding:20px 25px}.ph-button__size--small{padding:10px 15px}.ph-button__size--mini{padding:5px 10px}.ph-button__primary{background:#4353ff;background:var(--ph-accent-color,#4353ff);color:#fff}.ph-button__primary:hover{opacity:.85}.ph-button__text{color:#999;color:var(--ph-muted-color,#999);background:transparent;border-color:transparent}.ph-button__text:hover{background:transparent;color:#51595f;color:var(--ph-body-color,#51595f)}"; }
}

class Dialog {
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
    static get style() { return ":host{all:initial;font-size:16px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.ph-dialog-wrapper,:host{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif;font-family:var(--ph-body-font,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif)}.ph-dialog-wrapper{color:#51595f;color:var(--ph-body-color,#51595f);position:fixed;left:0;top:0;width:100%;height:100%;background-color:grey;opacity:0;visibility:hidden;-webkit-transform:scale(1.1);transform:scale(1.1);-webkit-transition:visibility 0s linear .25s,opacity .25s 0s,-webkit-transform .25s;transition:visibility 0s linear .25s,opacity .25s 0s,-webkit-transform .25s;transition:visibility 0s linear .25s,opacity .25s 0s,transform .25s;transition:visibility 0s linear .25s,opacity .25s 0s,transform .25s,-webkit-transform .25s;z-index:1}.ph-visible{opacity:1;visibility:visible;-webkit-transform:scale(1);transform:scale(1);-webkit-transition:visibility 0s linear 0s,opacity .25s 0s,-webkit-transform .25s;transition:visibility 0s linear 0s,opacity .25s 0s,-webkit-transform .25s;transition:visibility 0s linear 0s,opacity .25s 0s,transform .25s;transition:visibility 0s linear 0s,opacity .25s 0s,transform .25s,-webkit-transform .25s}.ph-dialog{padding:35px 35px 30px 35px;background-color:#fff;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);border-radius:2px;min-width:300px}.ph-dialog-title{font-size:18px}.ph-dialog-content,.ph-dialog-title{margin-bottom:1em}.ph-dialog-button-container{text-align:right}.ph-close-button{width:12px;height:12px;opacity:.5;cursor:pointer;position:absolute;top:25px;right:25px}"; }
}

export { Button as PhButton, Dialog as PhDialog };
