import express from "express";

import { config } from "./config";
import { Database } from "./database";

export const App = async () => {
	// Database setup
	const database = new Database();
	const { forceSync } = config.database;

	try {
		await database.sync(forceSync);
	} catch (error) {
		console.log("Error on sync database");
	}

	// Create express app
	const app = express();

	return app;
};
