/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import './stencil.core';




export namespace Components {

  interface PhBadge {
    /**
    * A value prop
    */
    'value': string;
  }
  interface PhBadgeAttributes extends StencilHTMLAttributes {
    /**
    * A value prop
    */
    'value'?: string;
  }

  interface PhBubble {
    'order': number;
    'resolved': boolean;
    'show': boolean;
    'toggleShow': () => void;
    'x': number;
    'y': number;
  }
  interface PhBubbleAttributes extends StencilHTMLAttributes {
    'onDropped'?: (event: CustomEvent) => void;
    'onMove'?: (event: CustomEvent) => void;
    'onStart'?: (event: CustomEvent) => void;
    'order'?: number;
    'resolved'?: boolean;
    'show'?: boolean;
    'x'?: number;
    'y'?: number;
  }

  interface PhButton {
    'circled': boolean;
    'rounded': boolean;
    'size': string;
    /**
    * (optional) Button type - either primary, secondary or text.
    */
    'type': string;
  }
  interface PhButtonAttributes extends StencilHTMLAttributes {
    'circled'?: boolean;
    'rounded'?: boolean;
    'size'?: string;
    /**
    * (optional) Button type - either primary, secondary or text.
    */
    'type'?: string;
  }

  interface PhDialog {
    'close': () => Promise<boolean>;
    /**
    * (optional) Title - string for the title of the dialog
    */
    'dialogTitle': string;
    /**
    * Visible - true or false
    */
    'visible': boolean;
  }
  interface PhDialogAttributes extends StencilHTMLAttributes {
    /**
    * (optional) Title - string for the title of the dialog
    */
    'dialogTitle'?: string;
    /**
    * Visible - true or false
    */
    'visible'?: boolean;
  }

  interface PhDot {
    'resolved': boolean;
  }
  interface PhDotAttributes extends StencilHTMLAttributes {
    'resolved'?: boolean;
  }

  interface PhDraggable {
    'behavior': string;
    'container': any;
  }
  interface PhDraggableAttributes extends StencilHTMLAttributes {
    'behavior'?: string;
    'container'?: any;
    'onDragging'?: (event: CustomEvent) => void;
    'onEnd'?: (event: CustomEvent) => void;
    'onStart'?: (event: CustomEvent) => void;
  }

  interface PhEditor {}
  interface PhEditorAttributes extends StencilHTMLAttributes {}

  interface PhModal {
    'close': () => Promise<boolean>;
    /**
    * (optional) Title - string for the title of the dialog
    */
    'modalTitle': string;
    /**
    * Visible - true or false
    */
    'visible': boolean;
  }
  interface PhModalAttributes extends StencilHTMLAttributes {
    /**
    * (optional) Title - string for the title of the dialog
    */
    'modalTitle'?: string;
    /**
    * Visible - true or false
    */
    'visible'?: boolean;
  }

  interface PhPopover {
    'clickEvents': () => void;
    'clickOutSide': () => void;
    'closeDelay': number;
    'closeEvents': () => void;
    'content': string;
    'handleMouseEnter': () => void;
    'handleMouseLeave': () => void;
    'hoverEvents': () => void;
    'initPopper': () => void;
    'offset': string;
    'openDelay': number;
    'placement': string;
    'slotEvents': () => void;
    'trigger': string;
    /**
    * Allow outsiders to update popper
    */
    'updatePopper': () => void;
    'visible': boolean;
  }
  interface PhPopoverAttributes extends StencilHTMLAttributes {
    'closeDelay'?: number;
    'content'?: string;
    'offset'?: string;
    'onHide'?: (event: CustomEvent) => void;
    'onShow'?: (event: CustomEvent) => void;
    'openDelay'?: number;
    'placement'?: string;
    'trigger'?: string;
    'visible'?: boolean;
  }

  interface PhToolbar {
    'commentCount': number;
    'enabled': boolean;
  }
  interface PhToolbarAttributes extends StencilHTMLAttributes {
    'commentCount'?: number;
    'enabled'?: boolean;
    'onCommentsClicked'?: (event: CustomEvent) => void;
  }
}

declare global {
  interface StencilElementInterfaces {
    'PhBadge': Components.PhBadge;
    'PhBubble': Components.PhBubble;
    'PhButton': Components.PhButton;
    'PhDialog': Components.PhDialog;
    'PhDot': Components.PhDot;
    'PhDraggable': Components.PhDraggable;
    'PhEditor': Components.PhEditor;
    'PhModal': Components.PhModal;
    'PhPopover': Components.PhPopover;
    'PhToolbar': Components.PhToolbar;
  }

  interface StencilIntrinsicElements {
    'ph-badge': Components.PhBadgeAttributes;
    'ph-bubble': Components.PhBubbleAttributes;
    'ph-button': Components.PhButtonAttributes;
    'ph-dialog': Components.PhDialogAttributes;
    'ph-dot': Components.PhDotAttributes;
    'ph-draggable': Components.PhDraggableAttributes;
    'ph-editor': Components.PhEditorAttributes;
    'ph-modal': Components.PhModalAttributes;
    'ph-popover': Components.PhPopoverAttributes;
    'ph-toolbar': Components.PhToolbarAttributes;
  }


  interface HTMLPhBadgeElement extends Components.PhBadge, HTMLStencilElement {}
  var HTMLPhBadgeElement: {
    prototype: HTMLPhBadgeElement;
    new (): HTMLPhBadgeElement;
  };

  interface HTMLPhBubbleElement extends Components.PhBubble, HTMLStencilElement {}
  var HTMLPhBubbleElement: {
    prototype: HTMLPhBubbleElement;
    new (): HTMLPhBubbleElement;
  };

  interface HTMLPhButtonElement extends Components.PhButton, HTMLStencilElement {}
  var HTMLPhButtonElement: {
    prototype: HTMLPhButtonElement;
    new (): HTMLPhButtonElement;
  };

  interface HTMLPhDialogElement extends Components.PhDialog, HTMLStencilElement {}
  var HTMLPhDialogElement: {
    prototype: HTMLPhDialogElement;
    new (): HTMLPhDialogElement;
  };

  interface HTMLPhDotElement extends Components.PhDot, HTMLStencilElement {}
  var HTMLPhDotElement: {
    prototype: HTMLPhDotElement;
    new (): HTMLPhDotElement;
  };

  interface HTMLPhDraggableElement extends Components.PhDraggable, HTMLStencilElement {}
  var HTMLPhDraggableElement: {
    prototype: HTMLPhDraggableElement;
    new (): HTMLPhDraggableElement;
  };

  interface HTMLPhEditorElement extends Components.PhEditor, HTMLStencilElement {}
  var HTMLPhEditorElement: {
    prototype: HTMLPhEditorElement;
    new (): HTMLPhEditorElement;
  };

  interface HTMLPhModalElement extends Components.PhModal, HTMLStencilElement {}
  var HTMLPhModalElement: {
    prototype: HTMLPhModalElement;
    new (): HTMLPhModalElement;
  };

  interface HTMLPhPopoverElement extends Components.PhPopover, HTMLStencilElement {}
  var HTMLPhPopoverElement: {
    prototype: HTMLPhPopoverElement;
    new (): HTMLPhPopoverElement;
  };

  interface HTMLPhToolbarElement extends Components.PhToolbar, HTMLStencilElement {}
  var HTMLPhToolbarElement: {
    prototype: HTMLPhToolbarElement;
    new (): HTMLPhToolbarElement;
  };

  interface HTMLElementTagNameMap {
    'ph-badge': HTMLPhBadgeElement
    'ph-bubble': HTMLPhBubbleElement
    'ph-button': HTMLPhButtonElement
    'ph-dialog': HTMLPhDialogElement
    'ph-dot': HTMLPhDotElement
    'ph-draggable': HTMLPhDraggableElement
    'ph-editor': HTMLPhEditorElement
    'ph-modal': HTMLPhModalElement
    'ph-popover': HTMLPhPopoverElement
    'ph-toolbar': HTMLPhToolbarElement
  }

  interface ElementTagNameMap {
    'ph-badge': HTMLPhBadgeElement;
    'ph-bubble': HTMLPhBubbleElement;
    'ph-button': HTMLPhButtonElement;
    'ph-dialog': HTMLPhDialogElement;
    'ph-dot': HTMLPhDotElement;
    'ph-draggable': HTMLPhDraggableElement;
    'ph-editor': HTMLPhEditorElement;
    'ph-modal': HTMLPhModalElement;
    'ph-popover': HTMLPhPopoverElement;
    'ph-toolbar': HTMLPhToolbarElement;
  }


}
