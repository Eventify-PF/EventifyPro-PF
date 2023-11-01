const { Router } = require("express");
const { getEventsHandler } = require("../handlers/getEventsHandler");
const { getDetailByIdHandler } = require("../handlers/getDetailByIdHandler");
const { createTicketHandler } = require("../handlers/createTicketHandler");
const { createEventHandler } = require("../handlers/createEventHandler");
const { validateEvent } = require("../utiles/validate");
const { modifyEventHandler } = require("../handlers/modifyEventHandler");

const eventRouter = Router();

//Rutas
//Ruta de todos los eventos
eventRouter.get("/", getEventsHandler);
//Ruta de modificar eventos
eventRouter.put("/", modifyEventHandler);
//Ruta para subir tickets del evento
eventRouter.post("/ticket", createTicketHandler);
//Ruta para subir un evento
eventRouter.post("/", validateEvent, createEventHandler);
//Ruta para buscar por Id un evento
eventRouter.get("/:id", getDetailByIdHandler);

module.exports = eventRouter;
