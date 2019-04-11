
// ProjectHuddleUi: Custom Elements Define Library, ES Module/es5 Target

import { defineCustomElement } from './project-huddle-ui.core.js';
import { COMPONENTS } from './project-huddle-ui.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, COMPONENTS, opts);
}
