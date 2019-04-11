import '../../stencil.core';
import { EventEmitter } from "../../stencil.core";
export declare class Toolbar {
    el: HTMLElement;
    commentsClicked: EventEmitter;
    commentCount: number;
    enabled: boolean;
    render(): JSX.Element;
}
