import { h } from '../project-huddle-ui.core.js';

class Toolbar {
    constructor() {
        this.commentCount = 0;
        this.enabled = false;
    }
    render() {
        return (h("div", { class: "ph-toolbar" },
            h("div", { class: "ph-toolbar__move-control" },
                h("svg", { viewBox: "0 0 512 512", id: "ion-drag", class: "ion-drag", width: "14", height: "14", fill: "currentColor" },
                    h("path", { d: "M0 144h512v32H0zM0 240h512v32H0zM0 336h512v32H0z" }))),
            h("div", { class: "ph-toolbar__controls" },
                h("slot", null))));
    }
    static get is() { return "ph-toolbar"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "commentCount": {
            "type": Number,
            "attr": "comment-count"
        },
        "el": {
            "elementRef": true
        },
        "enabled": {
            "type": Boolean,
            "attr": "enabled",
            "mutable": true
        }
    }; }
    static get events() { return [{
            "name": "commentsClicked",
            "method": "commentsClicked",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return ".sc-ph-toolbar-h{all:initial;font-size:16px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif;font-family:var(--ph-body-font,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif)}.ph-toolbar.sc-ph-toolbar   *.sc-ph-toolbar, .sc-ph-toolbar-h{-webkit-box-sizing:border-box;box-sizing:border-box}.ph-toolbar.sc-ph-toolbar{z-index:2147483646;text-align:justify;width:68px;color:#fff;border-radius:3px;-webkit-transition:opacity .25s ease;transition:opacity .25s ease;background:#191d21;-webkit-box-shadow:0 0 5px rgba(0,0,0,.35);box-shadow:0 0 5px rgba(0,0,0,.35);font-family:segoe ui,helvetica neue,Helvetica,Arial,sans-serif}.ph-toolbar.sc-ph-toolbar   button.sc-ph-toolbar{-webkit-box-shadow:0 3px 9px 0 rgba(0,0,0,.2);box-shadow:0 3px 9px 0 rgba(0,0,0,.2);border-radius:9999px;-webkit-transition:all .5s ease;transition:all .5s ease;border:none;cursor:pointer;background:#4353ff;background:var(--ph-accent-color,#4353ff);color:#fff;padding:0;width:40px;height:40px;vertical-align:top;font-size:18px;margin:auto;display:block;position:relative}.ph-toolbar.sc-ph-toolbar   button.sc-ph-toolbar:active, .ph-toolbar.sc-ph-toolbar   button.sc-ph-toolbar:focus{outline:none}.ph-toolbar.sc-ph-toolbar   button.ph-secondary-link.sc-ph-toolbar{color:#6f7c8a;background:transparent;font-size:22px;margin:4px auto;-webkit-box-shadow:none;box-shadow:none}.ph-toolbar__move-control.sc-ph-toolbar{color:#6f7c8a;text-align:center;background:#23282d;width:100%;padding:2px;cursor:move;border-top-left-radius:3px;border-top-right-radius:3px}.ph-toolbar__comment-count.sc-ph-toolbar{display:block;color:#fff;background:#4353ff;border-radius:9999px;text-align:center;position:absolute;top:0;right:0;padding:4px;font-size:8px;line-height:8px;letter-spacing:0;min-width:16px}.ph-toolbar__controls.sc-ph-toolbar{padding:10px 15px 15px}"; }
}

export { Toolbar as PhToolbar };
