import { Component } from "@stencil/core";

@Component({
  tag: "ph-editor",
  styleUrl: "editor.scss",
  shadow: true
})
export class Editor {
  render() {
    return (
      <div class={`ph-text-editor`}>
        <slot />
      </div>
    );
  }
}
