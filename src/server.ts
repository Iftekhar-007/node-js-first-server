import http, { IncomingMessage, Server, ServerResponse } from "http";
import config from "./config";
import { RouteHandler, routes } from "./helpers/RouteHandler";
import path from "path";
import "./routes";

const server: Server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    console.log("server is runnign.....");

    const method = req.method?.toUpperCase() || "";
    const path = req.url || "";

    const methodMap = routes.get(method);

    const handler: RouteHandler | undefined = methodMap?.get(path);

    if (handler) {
      handler(req, res);
    } else {
      res.writeHead(404, { "content-type": "application/json" });
      res.end(
        JSON.stringify({
          success: false,
          message: "Not found routes for this url",
          path: path,
        })
      );
    }

    // if (req.url == "/api/users" && req.method == "POST") {
    //   let body = "";

    //   req.on("data", (chunk) => {
    //     body += chunk.toString();
    //   });

    //   req.on("end", () => {
    //     const parsedBody = JSON.parse(body);
    //     console.log(parsedBody);
    //     console.log("okay ts node dev working");

    //     res.end(JSON.stringify(parsedBody));
    //   });
    // }
  }
);

server.listen(config.port, () => {
  console.log(`server is running  ${config.port}`);
});
