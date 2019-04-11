export class Badge {
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
    static get style() { return "/**style-placeholder:ph-badge:**/"; }
}
