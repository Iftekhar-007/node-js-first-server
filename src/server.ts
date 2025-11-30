import http, { IncomingMessage, Server, ServerResponse } from "http";
import config from "./config";
import { RouteHandler, routes } from "./helpers/RouteHandler";
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
          message: "Not found routes for this url okay",
          path: path,
        })
      );
    }
  }
);

server.listen(config.port, () => {
  console.log(`server is running  ${config.port}`);
});
