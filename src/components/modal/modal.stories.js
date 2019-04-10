import { storiesOf } from "@storybook/html";

storiesOf("Components/Modal", module)
  .add("Default", () => `<ph-modal visible="true"></ph-modal>`)
  .add("With Input", () => `<ph-modal visible="true">asdf</ph-modal>`);
