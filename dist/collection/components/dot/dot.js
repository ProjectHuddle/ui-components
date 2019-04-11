export class Dot {
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
    static get style() { return "/**style-placeholder:ph-dot:**/"; }
}
