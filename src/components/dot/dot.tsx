import { Component, Prop } from "@stencil/core";

@Component({
  tag: "ph-dot",
  styleUrl: "dot.scss",
  shadow: true
})
export class Dot {
  @Prop() resolved: boolean = false;

  render() {
    return (
      <div class={"ph-dot"}>
        <slot />
      </div>
    );
  }
}
