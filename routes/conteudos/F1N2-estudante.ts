import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET: async () => {
    const html = await Deno.readFile(
      "./static/conteudos/F1N2-estudante/F1N2-estudante.html",
    );
    return await new Response(html, {
      headers: {
        "content-type": "text/html; charset=utf-8",
      },
    });
  },
};