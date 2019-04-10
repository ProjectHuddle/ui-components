import { Component, Prop, Method, Listen } from "@stencil/core";

@Component({
  tag: "ph-modal",
  styleUrl: "modal.scss",
  shadow: true
})
export class Modal {
  /** Visible - true or false */
  @Prop({
    mutable: true,
    reflectToAttr: true
  })
  public visible: boolean;

  /** (optional) Title - string for the title of the dialog */
  @Prop() modalTitle: string = "Alert";

  @Method()
  async close() {
    this.visible = false;
    return false;
  }

  @Listen("window:keydown")
  handleKeyDown(ev: KeyboardEvent) {
    if (ev.key === "Escape") {
      this.close();
    }
  }

  render() {
    let classNames = {
      "ph-visible": this.visible,
      "ph-modal-wrapper": true
    };

    return (
      <div class={classNames}>
        <div class="ph-modal">
          <div class="ph-modal-content">
            <slot />
            <div
              class="ph-close-button"
              onClick={() => {
                this.close();
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
