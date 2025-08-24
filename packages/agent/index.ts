/* eslint-disable @typescript-eslint/no-var-requires */

// The `napi-rs` build process will generate `agent.js` and `agent.d.ts`.
// We import the native module, which is loaded by the generated `agent.js`.
// The `.js` extension is important here.
import { sum, click, type_text, screenshot } from './agent.js';

/**
 * Types a given string.
 * This is a wrapper around the native `type_text` function to provide a camelCase name.
 * @param text The text to type.
 */
export function typeText(text: string): void {
  return type_text(text);
}

// Re-export the other functions as they are.
export { sum, click, screenshot };
