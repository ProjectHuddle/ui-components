import { h } from '../project-huddle-ui.core.js';

class Badge {
    constructor() {
        this.value = "";
    }
    render() {
        return (h("div", { class: "ph-badge" },
            h("slot", null),
            h("sup", { class: "ph-badge__content" }, this.value)));
    }
    static get is() { return "ph-badge"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "value": {
            "type": String,
            "attr": "value"
        }
    }; }
    static get style() { return ".sc-ph-badge-h{all:initial;font-size:16px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif;font-family:var(--ph-body-font,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif)}.ph-badge.sc-ph-badge, .sc-ph-badge-h{pointer-events:none}.ph-badge.sc-ph-badge{position:relative;display:inline-block}.ph-badge__content.sc-ph-badge{background-color:#4353ff;background-color:var(--ph-accent-color,#4353ff);border-radius:10px;color:#fff;display:inline-block;font-size:10px;height:18px;line-height:18px;padding:0 6px;text-align:center;white-space:nowrap;position:absolute;top:0;right:10px;-webkit-transform:translateY(-50%) translateX(100%);transform:translateY(-50%) translateX(100%)}"; }
}

export { Badge as PhBadge };
