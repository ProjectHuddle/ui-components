import { storiesOf } from "@storybook/html";
storiesOf("Components/Button", module).add(
  "Kitchen Sink",
  () =>
    `<ph-button size="large">Large Default</ph-button> <ph-button>Medium Default</ph-button> <ph-button size="small">Small Default</ph-button> <ph-button size="mini">Mini Default</ph-button> <br>
      <ph-button type="primary" size="large">Large Primary</ph-button> <ph-button type="primary">Medium Primary</ph-button> <ph-button type="primary" size="small">Small Primary</ph-button> <ph-button type="primary" size="mini">Mini Primary</ph-button> <br>
      <ph-button type="text" size="large">Large Text</ph-button> <ph-button type="text">Medium Text</ph-button> <ph-button type="text" size="small">Small Text</ph-button> <ph-button type="text" size="mini">Mini Text</ph-button>
      `
);
