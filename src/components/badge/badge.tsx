import { Component, Prop } from "@stencil/core";

@Component({
  tag: "ph-badge",
  styleUrl: "badge.scss",
  shadow: true
})
export class Badge {
  /**
   * A value prop
   */
  @Prop() value: string = "";

  render() {
    return (
      <div class="ph-badge">
        <slot />
        <sup class="ph-badge__content">{this.value}</sup>
      </div>
    );
  }
}
