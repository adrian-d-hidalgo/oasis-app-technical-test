import { Op } from "sequelize";
import { Oasis } from "./oasis.model";
import { object } from "../../utils";

interface IOasisCreate {
	name: string;
	water: number;
	coordinates: {
		latitude: number;
		longitude: number;
	};
	desertId: number;
}

interface IOasisGetAllFilters {
	water?: number;
	desertId?: number;
	page?: number;
	pageSize?: number;
}

export class OasisService {
	public async create(data: IOasisCreate) {
		const { name, water, coordinates, desertId } = data;
		const createData = {
			name,
			water,
			// coordinates: {
			// 	type: "Point",
			// 	coordinates: [coordinates.latitude, coordinates.longitude],
			// },
			desertId,
		};

		const oasis = await Oasis.create(createData);
		return oasis.toJSON();
	}

	public async getAll(filters: IOasisGetAllFilters) {
		const { page = 1, pageSize = 10, water = 0, desertId } = filters;

		const offset = (page - 1) * pageSize;
		const limit = pageSize;

		const where = object.removeEmptyFields({
			water: { [Op.gte]: water },
			desertId,
		});

		const result = await Oasis.findAndCountAll({
			where,
			offset,
			limit,
		});

		const oases = {
			data: result.rows,
			pages: Math.ceil(result.count / pageSize),
			items: result.count,
		};

		return oases;
	}
}
