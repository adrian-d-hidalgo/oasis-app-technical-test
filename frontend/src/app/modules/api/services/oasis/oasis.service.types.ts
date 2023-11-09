export type GetAllOasesResponseDataItem = {
  id: number;
  name: string;
  water: number;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  desertId: number;
  createdAt: Date;
  updatedAt: Date;
};

export type GetAllOasesResponseData = GetAllOasesResponseDataItem[];

export type GetAllOasesResponse = {
  data: GetAllOasesResponseData;
  items: number;
  pages: number;
};

export type CreateOasisData = {
  name: string;
  water: number;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  desertId: number;
};
