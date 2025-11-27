import http, { IncomingMessage, Server, ServerResponse } from "http";
import config from "./config";
// import path from "path";
const server: Server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    console.log("server is runnign.....");

    if (req.url == "/" && req.method == "GET") {
      res.writeHead(200, { "content-type": "application/json" });
      res.end(
        JSON.stringify({
          message: "hello0 from typescript....",
          path: req.url,
        })
      );
    }

    if (req.url == "/api/users" && req.method == "POST") {
      let body = "";

      req.on("data", (chunk) => {
        body += chunk.toString();
      });

      req.on("end", () => {
        const parsedBody = JSON.parse(body);
        console.log(parsedBody);
        console.log("okay ts node dev working");

        res.end(JSON.stringify(parsedBody));
      });
    }
  }
);

server.listen(config.port, () => {
  console.log(`server is running  ${config.port}`);
});
