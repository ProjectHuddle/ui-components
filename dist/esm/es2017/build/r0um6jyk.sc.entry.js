import { h } from '../project-huddle-ui.core.js';

class Modal {
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
    static get style() { return ".sc-ph-modal-h{all:initial;font-size:16px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.ph-modal-wrapper.sc-ph-modal, .sc-ph-modal-h{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif;font-family:var(--ph-body-font,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif)}.ph-modal-wrapper.sc-ph-modal{color:#51595f;color:var(--ph-body-color,#51595f);position:fixed;left:0;top:0;width:100%;height:100%;background-color:grey;opacity:0;visibility:hidden;-webkit-transform:scale(1.1);transform:scale(1.1);-webkit-transition:visibility 0s linear .25s,opacity .25s 0s,-webkit-transform .25s;transition:visibility 0s linear .25s,opacity .25s 0s,-webkit-transform .25s;transition:visibility 0s linear .25s,opacity .25s 0s,transform .25s;transition:visibility 0s linear .25s,opacity .25s 0s,transform .25s,-webkit-transform .25s;z-index:1}.ph-modal-wrapper .sc-ph-modal-s > :first-child{margin-top:0}.ph-modal-wrapper .sc-ph-modal-s > :last-child{margin-bottom:0}.ph-visible.sc-ph-modal{opacity:1;visibility:visible;-webkit-transform:scale(1);transform:scale(1);-webkit-transition:visibility 0s linear 0s,opacity .25s 0s,-webkit-transform .25s;transition:visibility 0s linear 0s,opacity .25s 0s,-webkit-transform .25s;transition:visibility 0s linear 0s,opacity .25s 0s,transform .25s;transition:visibility 0s linear 0s,opacity .25s 0s,transform .25s,-webkit-transform .25s}.ph-modal.sc-ph-modal{padding:35px 35px 30px 35px;background-color:#fff;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);border-radius:2px;min-width:500px}.ph-modal-title.sc-ph-modal{font-size:18px}.ph-modal-content.sc-ph-modal, .ph-modal-title.sc-ph-modal{margin-bottom:1em}.ph-modal-button-container.sc-ph-modal{text-align:right}.ph-close-button.sc-ph-modal{width:14px;height:14px;opacity:.5;cursor:pointer;position:absolute;top:30px;right:30px}"; }
}

export { Modal as PhModal };
