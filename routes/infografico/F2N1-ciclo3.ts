import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET: async () => {
    const html = await Deno.readFile(
      "./static/infografico/F2N1-ciclo3/F2N1-ciclo3.html",
    );
    return new Response(html, {
      headers: {
        "content-type": "text/html; charset=utf-8",
      },
    });
  },
};
