import '../../stencil.core';
import { EventEmitter } from "../../stencil.core";
export declare class Bubble {
    private reference?;
    private bubble?;
    private popper;
    private timeout;
    el: HTMLElement;
    startingY: number;
    startingX: number;
    hovered: boolean;
    show: boolean;
    resolved: boolean;
    order: number;
    x: number;
    y: number;
    start: EventEmitter;
    move: EventEmitter;
    dropped: EventEmitter;
    componentDidLoad(): void;
    toggleShow(): void;
    dragStart: (e: MouseEvent) => void;
    dragEnd: (e: MouseEvent) => void;
    dragMove: (e: MouseEvent) => void;
    render(): JSX.Element;
}
