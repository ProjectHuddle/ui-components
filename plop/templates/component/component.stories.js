import { storiesOf } from "@storybook/html";

storiesOf("Components/TemplateComponent", module)
  .add("Default", () => `<ph-template-component></ph-template-component>`)
  .add(
    "With Input",
    () => `<ph-template-component test="John"></ph-template-component>`
  );
