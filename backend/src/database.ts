import { Sequelize } from "sequelize";

import { Oasis } from "./modules/oasis/oasis.model";
import { Desert } from "./modules/desert/desert.model";

export class Database {
	private sequelize = new Sequelize({
		dialect: "sqlite",
		storage: "database.sqlite",
	});

	constructor() {
		// this.sequelize.query("SELECT InitSpatialMetadata(1);");
		Oasis.initialize(this.sequelize);
		Desert.initialize(this.sequelize);
	}

	public sync(force: boolean): Promise<Sequelize> {
		return this.sequelize.sync({ force });
	}
}
