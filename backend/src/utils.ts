export const object = {
	removeEmptyFields(obj: { [key: string]: any }): { [key: string]: any } {
		return Object.keys(obj).reduce((acc, key) => {
			if (obj[key] !== undefined) {
				// @ts-ignore
				acc[key] = obj[key];
			}
			return acc;
		}, {});
	},
};
