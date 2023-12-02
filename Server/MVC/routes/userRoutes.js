const express = require("express");
const { list, details, create, remove, update } = require("../controllers/usercontorller");
const routes = express.Router();

routes.get("/list", list);
routes.get("/:id", details);
routes.post("/create", create);
routes.put("/:id", update);
routes.delete("/:id", remove);

module.exports = routes;