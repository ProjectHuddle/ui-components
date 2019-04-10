import { storiesOf } from "@storybook/html";

storiesOf("Components/Badge", module)
  .add("Default", () => `<ph-badge>1</ph-badge>`)
  .add(
    "With Element",
    () =>
      `<ph-badge value="1"><ph-button circled type="text">Icon</ph-button></ph-badge>`
  );
