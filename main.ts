/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="deno.ns" />
/// <reference lib="esnext" />

import { start } from "$fresh/server.ts";
import deco from "deco/plugins/deco.ts";
import manifest from "./fresh.gen.ts";
import decoManifest from "./manifest.gen.ts";

await start(manifest, {
  plugins: [
    deco({ manifest: decoManifest }),
  ],
});
