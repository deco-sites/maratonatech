import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET: async (_request) => {
    const filePath = "./static/infografico/F2N1-ciclo1/F2N1-ciclo1.html";

    try {
      const headers = new Headers({
        "Content-Type": "text/html; charset=utf-8",
      });

      // Abre o arquivo para leitura.
      const file = await Deno.open(filePath);

      // Envia os headers da resposta.
      const response = new Response(null, { status: 200, headers });

      // Tamanho do buffer a ser lido por vez.
      const bufferSize = 500000;
      const buffer = new Uint8Array(bufferSize);

      // Stream do arquivo.
      return new Response(
        new ReadableStream({
          async start(controller) {
            try {
              while (true) {
                const bytesRead = await file.read(buffer);
                if (bytesRead === null) {
                  break;
                }
                const chunk = buffer.subarray(0, bytesRead);
                controller.enqueue(chunk);
              }
            } catch (error) {
              console.error("Erro ao ler o arquivo:", error);
              controller.error(error);
            } finally {
              file.close();
              controller.close();
            }
          },
        }),
        response,
      );
    } catch (error) {
      console.error("Erro ao acessar o arquivo:", error);
      const errorResponse = new Response("Erro ao ler o arquivo", {
        status: 500,
        headers: new Headers({ "Content-Type": "text/plain" }),
      });
      return errorResponse;
    }
  },
};
