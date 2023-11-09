import { json, urlencoded } from "express";
import cors from "cors";

import { App } from "./app";
import { config } from "./config";

// Routes
import { OasisRouter } from "./modules/oasis/oasis.ruter";
import { DesertRouter } from "./modules/desert/desert.router";

App().then((app) => {
	// App config
	app.use(cors());
	app.use(urlencoded({ extended: true }));
	app.use(json());

	// Init routes
	app.use("/oases", OasisRouter);
	app.use("/deserts", DesertRouter);

	// Initialize app
	const { port } = config.app;
	app.listen(port, () => console.log(`App running on port: ${port}`));
});
