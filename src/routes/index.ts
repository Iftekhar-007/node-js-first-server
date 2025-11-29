import addRoutes from "../helpers/RouteHandler";
import sendJson from "../helpers/sendJson";

addRoutes("GET", "/", (req, res) => {
  sendJson(res, 200, {
    message: "hello it is root url requ",
    path: req.url,
  });
});

addRoutes("GET", "/api", (req, res) => {
  sendJson(res, 200, {
    message: "hello it is api routes",
    path: req.url,
  });
});
