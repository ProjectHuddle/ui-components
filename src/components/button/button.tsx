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

  render() {
    return (
      <div
        class={`ph-button ph-button__${this.type} ph-button__size--${
          this.size
        }`}
      >
        <slot />
      </div>
    );
  }
}
