import { storiesOf } from "@storybook/html";

storiesOf("Components/Toolbar", module)
  .add("Default", () => `<ph-toolbar></ph-toolbar>`)
  .add(
    "With Popover",
    () => `
    <ph-draggable style="position: fixed; right: 30px; bottom: 30px;">
      <ph-toolbar>
        <ph-button type="text" circled>
          <ph-badge value="1">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6f7c8a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </ph-badge>
        </ph-button>
        <ph-popover visible="true" trigger="manual" placement="left">
          <h3>Welcome!</h3>

          <p>Click here to start commenting.</p>

          <ph-button type="primary" size="small" ph-close-popover>Okay</ph-button>

          <ph-button type="primary" circled slot="reference"> 
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </ph-button>
        </ph-popover>
      </ph-toolbar>
    </ph-draggable>
  `
  );
