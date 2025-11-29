import { readUsers, writeUsers } from "../helpers/fileDb";
import parsedBody from "../helpers/parseBody";
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

addRoutes("POST", "/api/users", async (req, res) => {
  const body = await parsedBody(req);

  const users = readUsers();

  const newUser = {
    id: Date.now(),
    ...body,
  };

  users.push(newUser);

  writeUsers(users);

  sendJson(res, 201, body);
});
