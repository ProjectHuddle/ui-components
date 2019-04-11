export class Button {
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
    static get style() { return "/**style-placeholder:ph-button:**/"; }
}
