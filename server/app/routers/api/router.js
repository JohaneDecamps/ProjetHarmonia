const express = require("express");

const router = express.Router();

const { sayWelcome } = require("../../controllers/sayActions");

const {browse} = require("../../controllers/programActions")

router.get("/", sayWelcome);

router.get("/programs", browse);

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

module.exports = router;
