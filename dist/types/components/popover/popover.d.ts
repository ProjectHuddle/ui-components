import '../../stencil.core';
import { EventEmitter } from "../../stencil.core";
export declare class Popover {
    private bubble?;
    private timer;
    el: HTMLElement;
    reference: any;
    closers: any;
    popper: any;
    content: string;
    trigger: string;
    placement: string;
    openDelay: number;
    closeDelay: number;
    offset: string;
    visible: boolean;
    show: EventEmitter;
    hide: EventEmitter;
    componentWillLoad(): void;
    componentDidLoad(): void;
    slotEvents(): void;
    closeEvents(): void;
    hoverEvents(): void;
    clickEvents(): void;
    clickOutSide(): void;
    handleMouseEnter(): void;
    handleMouseLeave(): void;
    initPopper(): void;
    watchPopperHandler(newValue: boolean): void;
    /**
     * Allow outsiders to update popper
     */
    updatePopper(): void;
    render(): JSX.Element;
}
