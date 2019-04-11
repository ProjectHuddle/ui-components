import { h } from '../project-huddle-ui.core.js';

class Editor {
    render() {
        return (h("div", { class: `ph-text-editor` },
            h("slot", null)));
    }
    static get is() { return "ph-editor"; }
    static get encapsulation() { return "shadow"; }
    static get style() { return ".ph-text-editor{background:#f3f3f3;font-size:16px;padding:15px}"; }
}

export { Editor as PhEditor };
