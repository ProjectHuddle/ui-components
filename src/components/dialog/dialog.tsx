import { Component, Prop, Method, Listen } from "@stencil/core";

@Component({
  tag: "ph-dialog",
  styleUrl: "dialog.scss",
  shadow: true
})
export class Dialog {
  /** Visible - true or false */
  @Prop({
    mutable: true,
    reflectToAttr: true
  })
  public visible: boolean;

  /** (optional) Title - string for the title of the dialog */
  @Prop() dialogTitle: string = "Alert";

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
      "ph-dialog-wrapper": true
    };

    return (
      <div class={classNames}>
        <div class="ph-dialog">
          <div class="ph-dialog-title">{this.dialogTitle}</div>
          <div class="ph-dialog-content">
            <slot />
          </div>
          <div class="ph-dialog-button-container">
            <slot name="footer">
              <ph-button type="text" onClick={() => this.close()}>
                Cancel
              </ph-button>
              <ph-button onClick={() => this.close()}>Okay</ph-button>
            </slot>
          </div>
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
    );
  }
}
