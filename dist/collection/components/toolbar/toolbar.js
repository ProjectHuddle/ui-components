export class Toolbar {
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
    static get style() { return "/**style-placeholder:ph-toolbar:**/"; }
}
