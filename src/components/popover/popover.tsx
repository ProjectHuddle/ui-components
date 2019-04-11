import {
  Component,
  Prop,
  Method,
  State,
  Element,
  Watch,
  Event,
  EventEmitter
} from "@stencil/core";

import Popper from "popper.js";
@Component({
  tag: "ph-popover",
  styleUrl: "popover.scss",
  shadow: true
})
export class Popover {
  private bubble?: HTMLElement;
  // private arrow?: HTMLElement;
  private timer;

  @Element() el: HTMLElement;

  @State() reference;
  @State() closers;
  @State() popper;

  @Prop() content: string = "";
  @Prop() trigger: string = "hover";
  @Prop() placement: string = "top";
  @Prop() openDelay: number = 0;
  @Prop() closeDelay: number = 300;
  @Prop() offset: string = "0, 20";
  @Prop({ mutable: true, reflectToAttr: true }) visible: boolean = false;

  @Event() show: EventEmitter;
  @Event() hide: EventEmitter;

  componentWillLoad() {
    this.reference = this.el.querySelectorAll("[slot=reference]")[0];
    this.closers = this.el.querySelectorAll("[ph-close-popover]");
    this.slotEvents();
    this.closeEvents();

    switch (this.trigger) {
      case "hover":
        this.hoverEvents();
        this.clickOutSide();
        break;
      case "click":
        this.clickEvents();
        this.clickOutSide();
        break;
    }
  }

  componentDidLoad() {
    this.visible && this.initPopper();
  }

  @Method()
  slotEvents() {
    switch (this.trigger) {
      case "hover":
        this.hoverEvents();
        this.clickOutSide();
        break;
      case "click":
        this.clickEvents();
        this.clickOutSide();
        break;
    }
  }

  @Method()
  closeEvents() {
    for (var i = 0; i < this.closers.length; i++) {
      this.closers[i].addEventListener("click", () => {
        this.visible = !this.visible;
      });
    }
  }

  @Method()
  hoverEvents() {
    this.reference.addEventListener("mouseenter", () =>
      this.handleMouseEnter()
    );
    this.reference.addEventListener("mouseleave", () =>
      this.handleMouseLeave()
    );
  }

  @Method()
  clickEvents() {
    this.reference.addEventListener("click", () => {
      this.visible = !this.visible;
    });
  }

  @Method()
  clickOutSide() {
    document.addEventListener("click", e => {
      let target = e.target as HTMLTextAreaElement;
      if (target.closest("ph-popover")) return;
      this.visible = false;
    });
  }

  @Method()
  handleMouseEnter() {
    clearTimeout(this.timer);
    if (this.openDelay) {
      this.timer = setTimeout(() => {
        this.visible = true;
      }, this.openDelay);
    } else {
      this.visible = true;
    }
  }

  @Method()
  handleMouseLeave() {
    if (this.trigger !== "hover") {
      return;
    }

    if (this.closeDelay) {
      this.timer = setTimeout(() => {
        this.visible = false;
      }, this.closeDelay);
    } else {
      this.visible = false;
    }
  }

  @Method()
  initPopper() {
    this.popper = new Popper(this.reference, this.bubble, {
      // @ts-ignore: should be a string
      placement: this.placement,
      modifiers: {
        offset: {
          enabled: true,
          offset: this.offset
        }
      },
      onCreate: () => {
        this.bubble.style.visibility = "visible";
        this.bubble.style.opacity = "1";
      }
    });
  }

  @Watch("visible")
  watchPopperHandler(newValue: boolean) {
    if (newValue) {
      this.show.emit(this);
      this.initPopper();
    } else {
      this.bubble.style.visibility = "hidden";
      this.bubble.style.opacity = "0";
      this.hide.emit(this);
    }
  }

  /**
   * Allow outsiders to update popper
   */
  @Method()
  updatePopper() {
    this.popper.update();
  }

  render() {
    var classes = {
      "ph-popover popper": true,
      "ph-show": this.visible
    };

    return (
      <div class="ph-popover-wrapper">
        <div
          onMouseEnter={() => this.handleMouseEnter()}
          onMouseLeave={() => this.handleMouseLeave()}
          class={classes}
          role="tooltip"
          ref={el => (this.bubble = el as HTMLElement)}
        >
          <slot>{this.content}</slot>
          <div x-arrow />
        </div>

        <slot name="reference" />
      </div>
    );
  }
}
