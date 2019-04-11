import { storiesOf } from "@storybook/html";

storiesOf("Components/Draggable", module)
  .add("Default", () => `<ph-draggable></ph-draggable>`)
  .add(
    "With Input",
    () =>
      `<ph-draggable><ph-button>Draggable Button!</ph-button></ph-draggable>`
  );
