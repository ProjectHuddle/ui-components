import { Component, Prop } from "@stencil/core";

@Component({
  tag: "ph-template-component",
  styleUrl: "template-component.scss",
  shadow: true
})
export class TemplateComponent {
  /**
   * A test prop
   */
  @Prop() test: string = "Hello World";

  render() {
    return <div class="ph-template-component">{this.test}</div>;
  }
}
