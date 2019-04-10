import { storiesOf } from "@storybook/html";
storiesOf("Components/Popover", module)
  .add(
    "Default",
    () => `<ph-popover placement="right">
    <p>I'm slotted content!</p>
  <ph-button slot="reference">This is a test</ph-button>
  </ph-popover>`
  )
  .add(
    "Events",
    () => `
    <ph-popover placement="bottom" trigger="click">
        <h3>Welcome!</h3>
        <p>Click here to leave a comment.</p>
        <ph-button type="primary" size="small">Okay!</ph-button>
        <ph-button type="primary" slot="reference">Click</ph-button>
      </ph-popover>

      <ph-popover placement="bottom" trigger="hover">
        <h3>Welcome!</h3>
        <p>Click here to leave a comment.</p>
        <ph-button size="small">Okay!</ph-button>
        <ph-button slot="reference">Hover</ph-button>
      </ph-popover>

      <ph-popover placement="bottom" trigger="manual" visible="true">
        <h3>Welcome!</h3>
        <p>Click here to leave a comment.</p>
        <ph-button size="small">Okay!</ph-button>
        <ph-button slot="reference">Manual</ph-button>
      </ph-popover>
    `
  )
  .add(
    "Visible",
    () => `<ph-popover placement="left" trigger="click" visible="true">
  <h3>Welcome!</h3>
  <p>Click here to leave a comment.</p>
  <ph-button size="small">Okay!</ph-button>
  <ph-button slot="reference">Click</ph-button>
</ph-popover>`
  )
  .add(
    "Fixed Elements",
    () => `<div style="text-align:center">
      <ph-popover placement="left">
        <h3>Welcome!</h3>
        <p>Click here to leave a comment.</p>
        <ph-button size="small">Okay!</ph-button>
        <ph-button slot="reference" style="position: fixed; bottom: 30px; right: 30px;">This is a test</ph-button>
      </ph-popover>
      <ph-popover placement="left">
        <span>Click here to leave a comment. Click here to leave a comment. Click here to leave a comment. Click here to leave a comment.</span>
        <ph-button slot="reference" style="position: fixed; bottom: 30px; left: 30px;">This is a test</ph-button>
      </ph-popover>
      <ph-popover placement="left">
        This is just content.
        <ph-button slot="reference" style="position: fixed; bottom: 50%; left: 30px;">This is a test</ph-button>
      </ph-popover>
      <ph-popover placement="bottom">
        Bottom
        <ph-button slot="reference" style="position: fixed; top: 30px; right: 50%;">Bottom</ph-button>
      </ph-popover>
      <ph-popover placement="top">
        Top
        <ph-button slot="reference" style="position: fixed; bottom: 30px; right: 50%;">Top</ph-button>
      </ph-popover>
    </div>`
  );
