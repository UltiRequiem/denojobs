import { setup } from "../client_deps.ts";
import {
  type RenderContext,
  type RenderFn,
  virtualSheet,
} from "../server_deps.ts";

const sheet = virtualSheet();

sheet.reset();

setup({ sheet });

export function render(context: RenderContext, render: RenderFn) {
  const snapshot = context.state.get("twindSnapshot") as unknown[] | undefined;

  sheet.reset(snapshot);

  render();

  context.styles.splice(0, context.styles.length, ...sheet.target);

  const newSnapshot = sheet.reset();

  context.state.set("twindSnapshot", newSnapshot);
}
