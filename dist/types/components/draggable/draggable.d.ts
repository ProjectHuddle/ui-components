import '../../stencil.core';
import { EventEmitter } from "../../stencil.core";
export declare class Draggable {
    el: HTMLElement;
    hasDragged: boolean;
    active: boolean;
    currentX: number;
    currentY: number;
    initialX: number;
    initialY: number;
    xOffset: number;
    yOffset: number;
    container: Window;
    behavior: string;
    start: EventEmitter;
    dragging: EventEmitter;
    end: EventEmitter;
    hostData(): {
        class: {
            "ph-has-dragged-fixed": boolean;
            "ph-has-dragged-absolute": boolean;
        };
    };
    componentWillLoad(): void;
    dragStart: (e: any) => void;
    dragEnd: (e: any) => void;
    drag: (e: any) => void;
    maybeReset: () => void;
    isOutsideContainer: () => boolean;
    reset: () => void;
    render(): JSX.Element;
}
