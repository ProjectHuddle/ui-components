import '../../stencil.core';
export declare class Dialog {
    /** Visible - true or false */
    visible: boolean;
    /** (optional) Title - string for the title of the dialog */
    dialogTitle: string;
    close(): Promise<boolean>;
    handleKeyDown(ev: KeyboardEvent): void;
    render(): JSX.Element;
}
