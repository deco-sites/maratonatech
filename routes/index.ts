import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET: () => {
    return new Response(Deno.readFileSync("./static/index.html"), {
      headers: {
        "content-type": "text/html; charset=utf-8",
      },
    });
  },
};
