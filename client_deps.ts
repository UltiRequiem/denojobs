import { IS_BROWSER } from "https://raw.githubusercontent.com/lucacasonato/fresh/main/runtime.ts";

export * from "https://raw.githubusercontent.com/lucacasonato/fresh/main/runtime.ts";

import { setup } from "https://esm.sh/twind@0.16.16";

if (IS_BROWSER) {
  setup();
}

export { apply, setup, tw } from "https://esm.sh/twind@0.16.16";
