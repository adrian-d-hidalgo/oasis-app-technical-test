import { Desert } from "./desert.model";

interface IDeserCreate {
	name: string;
}

interface IDesertGetAllFilters {
	page?: number;
	pageSize?: number;
}

export class DesertService {
	public async create(data: IDeserCreate) {
		const { name } = data;
		const createData = {
			name,
		};

		const desert = await Desert.create(createData);
		return desert.toJSON();
	}

	public async getAll(filters: IDesertGetAllFilters) {
		const { page = 1, pageSize = 10 } = filters;

		const offset = (page - 1) * pageSize;
		const limit = pageSize;

		const result = await Desert.findAndCountAll({
			offset,
			limit,
		});

		const deserts = {
			data: result.rows,
			pages: Math.ceil(result.count / pageSize),
			items: result.count,
		};

		return deserts;
	}
}
