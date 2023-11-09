import { DataTypes, Model, Sequelize } from "sequelize";
import { Oasis } from "../oasis/oasis.model";

export class Desert extends Model {
	public id!: number;
	public name!: string;

	public static initialize(sequelize: Sequelize): void {
		Desert.init(
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
			},
			{
				sequelize,
				modelName: "Desert",
				tableName: "Deserts",
			}
		);
		Desert.hasMany(Oasis, { as: "oasis", foreignKey: "desertId" });
	}
}
