import { Component, Prop, Event, EventEmitter, Element } from "@stencil/core";

@Component({
  tag: "ph-toolbar",
  styleUrl: "toolbar.scss",
  shadow: true
})
export class Toolbar {
  @Element() el: HTMLElement;

  @Event() commentsClicked: EventEmitter;

  @Prop() commentCount: number = 0;
  @Prop({ mutable: true }) enabled: boolean = false;

  render() {
    return (
      <div class="ph-toolbar">
        <div class="ph-toolbar__move-control">
          <svg
            viewBox="0 0 512 512"
            id="ion-drag"
            class="ion-drag"
            width="14"
            height="14"
            fill="currentColor"
          >
            <path d="M0 144h512v32H0zM0 240h512v32H0zM0 336h512v32H0z" />
          </svg>
        </div>
        <div class="ph-toolbar__controls">
          <slot />
        </div>
      </div>
    );
  }
}
