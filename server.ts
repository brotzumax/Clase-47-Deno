import { Req, Res, Router, WebApp } from "https://deno.land/x/denorest@v3.1/mod.ts";

const app = new WebApp();
const router = new Router();

router.get("/", (_req: Req, res: Res) => {
  res.reply = `
    <html>
      <h1>Hola Mundo</h1>
    </html>
  `;
});

app.set(router);
app.listen(8080);