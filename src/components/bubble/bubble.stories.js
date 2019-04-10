import { storiesOf } from "@storybook/html";

storiesOf("Components/Bubble", module)
  .add("Default", () => `<ph-bubble></ph-bubble>`)
  .add(
    "With Controls",
    () => `<ph-bubble x="100" y="100">
        <ph-button type="primary">Add Comment</ph-button>
        <ph-button type="text">Cancel</ph-button>
    </ph-bubble>`
  );
