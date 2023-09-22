import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET: async () => {
    const html = await Deno.readFile(
      "./static/planodeaula/F2N2/F2N2.html",
    );
    return new Response(html, {
      headers: {
        "content-type": "text/html; charset=utf-8",
      },
    });
  },
};
