import dotenv from "dotenv";
dotenv.config();

export const config = {
	app: {
		port: parseInt(process.env.APP_PORT || "3000"),
	},
	database: {
		forceSync: process.env.DATABASE_FORCE_SYNC === "1",
	},
};
