import {
  Component,
  Prop,
  Element,
  State,
  Event,
  EventEmitter,
  Method
} from "@stencil/core";
import Popper from "popper.js";

@Component({
  tag: "ph-bubble",
  styleUrl: "bubble.scss",
  shadow: true
})
export class Bubble {
  private reference?: HTMLElement;
  private bubble?: HTMLElement;
  private popper;
  private timeout;

  @Element() el: HTMLElement;

  @State() startingY: number = 0;
  @State() startingX: number = 0;
  @State() hovered: boolean = false;

  @Prop({ mutable: true }) show: boolean = false;
  @Prop() resolved: boolean = false;
  @Prop() order: number = 1;
  @Prop({ mutable: true }) x: number = 0;
  @Prop({ mutable: true }) y: number = 0;

  @Event() start: EventEmitter;
  @Event() move: EventEmitter;
  @Event() dropped: EventEmitter;

  componentDidLoad() {
    this.popper = new Popper(this.reference, this.bubble, {
      placement: "bottom-start",
      modifiers: {
        preventOverflow: {
          boundariesElement: "window"
        },
        offset: {
          enabled: true,
          offset: "0, 15"
        }
      }
    });
  }

  @Method()
  toggleShow() {
    this.show = !this.show;
  }

  //   @Method()
  dragStart = (e: MouseEvent) => {
    // prevent text highlighting
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    if (e.preventDefault) {
      e.preventDefault();
    }

    this.startingY = e.clientY;
    this.startingX = e.clientX;
    this.start.emit(e);

    this.hovered = false;
    this.show = !this.show;

    window.addEventListener("mousemove", this.dragMove);
    this.reference.addEventListener("mouseup", this.dragEnd);
  };

  // @Method()
  dragEnd = (e: MouseEvent) => {
    window.removeEventListener("mousemove", this.dragMove);
    this.reference.removeEventListener("mouseup", this.dragEnd);

    // emit drop event
    this.dropped.emit(e);

    // prevent text highlighting
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    if (e.preventDefault) {
      e.preventDefault();
    }
  };

  // @Method()
  dragMove = (e: MouseEvent) => {
    var math = Math.round(
      Math.sqrt(
        Math.pow(this.startingY - e.clientY, 2) +
          Math.pow(this.startingX - e.clientX, 2)
      )
    );

    // need to drag at least 10px
    if (math <= 10) {
      return;
    }

    // movement
    this.y = e.pageY > 0 ? e.pageY : 0;
    this.x = e.pageX > 0 ? e.pageX : 0;

    this.popper.update();

    // emit move event
    this.move.emit(e);

    // end
    this.reference.addEventListener("mouseup", this.dragEnd);
    document.addEventListener("mouseleave", this.dragEnd);
  };

  render() {
    var styles = {
      top: this.y + "px",
      left: this.x + "px",
      bottom: "0px",
      right: "0px"
    };

    var bubbleClasses = {
      "ph-bubble-wrapper": true,
      "ph-show": this.show,
      "ph-hover": this.hovered
    };

    var dotClasses = {
      "ph-dot": true,
      "ph-show": this.show,
      "ph-hover": this.hovered
    };

    return (
      <div
        class={bubbleClasses}
        onMouseEnter={() => {
          clearTimeout(this.timeout);
          this.hovered = true;
        }}
        onMouseLeave={() =>
          (this.timeout = setTimeout(() => {
            this.hovered = false;
          }, 750))
        }
        onMouseDown={() => (this.show = true)}
      >
        <slot name="dot">
          <ph-dot
            style={styles}
            class={dotClasses}
            onMouseDown={this.dragStart}
            ref={el => (this.reference = el as HTMLElement)}
            resolved={this.resolved}
          >
            {this.order}
          </ph-dot>
        </slot>

        <div ref={el => (this.bubble = el as HTMLElement)} class="ph-bubble">
          <slot />
          <div
            class="ph-close-button"
            onClick={() => {
              this.show = false;
              this.hovered = false;
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z" />
            </svg>
          </div>
          <div x-arrow />
        </div>
      </div>
    );
  }
}
