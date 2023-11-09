import { Router } from "express";

import { DesertService } from "./desert.service";

const DesertRouter = Router();

const desertService = new DesertService();

DesertRouter.post("/", async (req, res) => {
	const desert = await desertService.create(req.body);
	res.send({ data: desert });
});

DesertRouter.get("/", async (req, res) => {
	const result = await desertService.getAll({});
	res.send(result);
});

export { DesertRouter };
