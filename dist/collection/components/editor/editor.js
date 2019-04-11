export class Editor {
    render() {
        return (h("div", { class: `ph-text-editor` },
            h("slot", null)));
    }
    static get is() { return "ph-editor"; }
    static get encapsulation() { return "shadow"; }
    static get style() { return "/**style-placeholder:ph-editor:**/"; }
}
