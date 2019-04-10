import { Component, Prop } from "@stencil/core";

@Component({
  tag: "ph-button",
  styleUrl: "button.scss",
  shadow: true
})
export class Button {
  /** (optional) Button type - either primary, secondary or text. */
  @Prop() type: string = "default";
  @Prop() size: string = "normal";
  @Prop() circled: boolean = false;
  @Prop() rounded: boolean = false;

  render() {
    let classes = {
      "ph-button": true,
      [`ph-button__${this.type}`]: true,
      [`ph-button__size--${this.size}`]: true,
      "ph-button__style--circled": this.circled,
      "ph-button__style--rounded": this.rounded
    };
    return (
      <div class={classes}>
        <slot />
      </div>
    );
  }
}
