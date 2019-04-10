import { storiesOf } from "@storybook/html";

storiesOf("Components/Dialog", module)
  .add("Default", () => `<ph-dialog visible="true"></ph-dialog>`)
  .add(
    "With Content and Title",
    () =>
      `<ph-dialog visible="true" dialog-title="Custom Title">asdf</ph-dialog>`
  );
