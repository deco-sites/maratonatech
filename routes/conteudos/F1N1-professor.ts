import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET: async () => {
    const html = await Deno.readFile(
      "./static/conteudos/F1N1-professor/genially.html",
    );
    return new Response(html, {
      headers: {
        "content-type": "text/html; charset=utf-8",
      },
    });
  },
};
