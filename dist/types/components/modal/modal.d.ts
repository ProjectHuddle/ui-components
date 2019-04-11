import '../../stencil.core';
export declare class Modal {
    /** Visible - true or false */
    visible: boolean;
    /** (optional) Title - string for the title of the dialog */
    modalTitle: string;
    close(): Promise<boolean>;
    handleKeyDown(ev: KeyboardEvent): void;
    render(): JSX.Element;
}
