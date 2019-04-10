import { storiesOf } from "@storybook/html";

storiesOf("Components/Modal", module)
  .add("Default", () => `<ph-modal visible="true"></ph-modal>`)
  .add(
    "With Input",
    () => `
  <ph-modal visible="true">
    <h1>Welcome!</h1>
    <p>These are the instructions for you to follow</p>
  </ph-modal>
  `
  );
