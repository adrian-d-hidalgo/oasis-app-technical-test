import { DataTypes, Model, Sequelize } from "sequelize";

export class Oasis extends Model {
	public id!: number;
	public name!: string;
	public water!: number;
	public coordinates!: typeof DataTypes.GEOMETRY;

	public static initialize(sequelize: Sequelize): void {
		Oasis.init(
			{
				id: {
					type: DataTypes.INTEGER,
					primaryKey: true,
					autoIncrement: true,
				},
				name: {
					type: DataTypes.STRING,
					allowNull: false,
				},
				water: {
					type: DataTypes.FLOAT,
					allowNull: false,
				},
				// coordinates: {
				// 	type: DataTypes.GEOMETRY,
				// 	allowNull: false,
				// },
				desertId: {
					type: DataTypes.INTEGER,
					allowNull: false,
				},
			},
			{
				sequelize,
				modelName: "Oasis",
				tableName: "Oases",
			}
		);
	}
}
