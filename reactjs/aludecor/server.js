require("dotenv").config();
const next = require("next");
const http = require("http");
const hostname = "0.0.0.0";
const port = parseInt(process.env.PORT) || 3000;
const dev = process.env.NODE_ENV !== "production";

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = http.createServer((req, res) => {
    // Optional headers
    res.setHeader("Permissions-Policy", "camera=(), microphone=()");

    // Let Next.js handle the request
    handle(req, res);
  });

  server.listen(port, hostname, () => {
    console.log(`> ✅ Ready on http://${hostname}:${port}`);
  });
});
