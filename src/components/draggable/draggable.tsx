import {
  Component,
  Prop,
  Element,
  State,
  Event,
  EventEmitter
} from "@stencil/core";

@Component({
  tag: "ph-draggable",
  styleUrl: "draggable.scss",
  shadow: true
})
export class Draggable {
  @Element() el: HTMLElement;

  @State() hasDragged: boolean = false;
  @State() active: boolean = false;
  @State() currentX: number = 0;
  @State() currentY: number = 0;
  @State() initialX: number = 0;
  @State() initialY: number = 0;
  @State() xOffset: number = 0;
  @State() yOffset: number = 0;

  @Prop() container = window;
  @Prop() behavior: string = "fixed";

  @Event() start: EventEmitter;
  @Event() dragging: EventEmitter;
  @Event() end: EventEmitter;

  hostData() {
    return {
      class: {
        "ph-has-dragged-fixed": this.hasDragged && this.behavior == "fixed",
        "ph-has-dragged-absolute":
          this.hasDragged && this.behavior == "absolute"
      }
    };
  }

  componentWillLoad() {
    window.addEventListener("resize", this.maybeReset, false);

    this.container.addEventListener("touchstart", this.dragStart, false);
    this.container.addEventListener("touchend", this.dragEnd, false);
    this.container.addEventListener("touchmove", this.drag, false);

    this.container.addEventListener("mousedown", this.dragStart, false);
    this.container.addEventListener("mouseup", this.dragEnd, false);
    this.container.addEventListener("mousemove", this.drag, false);
  }

  // @Method()
  dragStart = e => {
    console.log('start', e);
    if (e.type === "touchstart") {
      this.initialX = e.touches[0].clientX - this.xOffset;
      this.initialY = e.touches[0].clientY - this.yOffset;
    } else {
      this.initialX = e.clientX - this.xOffset;
      this.initialY = e.clientY - this.yOffset;
    }

    if (e.target.closest("ph-draggable") === this.el) {
      this.start.emit(this);
      this.active = true;
    }
  };

  // @Method()
  dragEnd = (e) => {
    console.log('end', e);
    this.initialX = this.currentX;
    this.initialY = this.currentY;

    if (this.active) {
      this.end.emit(this);
    }

    this.active = false;
  };

  // @Method()
  drag = e => {
    console.log('maybedrag', e);
    if (this.active) {
      console.log('drag', e);
      e.preventDefault();
      this.hasDragged = true;

      if (e.type === "touchmove") {
        this.currentX = e.touches[0].clientX - this.initialX;
        this.currentY = e.touches[0].clientY - this.initialY;
      } else {
        this.currentX = e.clientX - this.initialX;
        this.currentY = e.clientY - this.initialY;
      }

      this.xOffset = this.currentX;
      this.yOffset = this.currentY;

      let rect = this.el.getBoundingClientRect() as DOMRect;
      if (
        (rect.x < 0 && this.currentX < parseInt(this.el.dataset.currentX)) ||
        (rect.x + rect.width > this.container.innerWidth &&
          this.currentX > parseInt(this.el.dataset.currentX))
      ) {
        this.currentX = parseInt(this.el.dataset.currentX);
      }
      if (
        (rect.y < 0 && this.currentY < parseInt(this.el.dataset.currentY)) ||
        (rect.y + rect.height > this.container.innerHeight &&
          this.currentY > parseInt(this.el.dataset.currentY))
      ) {
        this.currentY = parseInt(this.el.dataset.currentY);
      }

      this.dragging.emit(this);

      // get previous
      this.el.style.transform =
        "translate3d(" + this.currentX + "px, " + this.currentY + "px, 0)";

      this.el.dataset.currentX = this.currentX.toString();
      this.el.dataset.currentY = this.currentY.toString();
    }
  };

  // @Method()
  maybeReset = () => {
    if (this.isOutsideContainer()) {
      this.reset();
    }
  };

  // @Method()
  isOutsideContainer = () => {
    let rect = this.el.getBoundingClientRect() as DOMRect;

    return (
      rect.x < 0 ||
      rect.y < 0 ||
      (rect.x + rect.width > this.container.innerWidth ||
        rect.y + rect.height > this.container.innerHeight)
    );
  };

  // @Method()
  reset = () => {
    this.el.style.transform = "translate3d(0px, 0px, 0)";
    this.el.dataset.currentX = "0";
    this.el.dataset.currentY = "0";

    this.xOffset = 0;
    this.yOffset = 0;
  };

  render() {
    return <slot />;
  }
}
