export type GetAllDesertsResponseDataItem = {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};

export type GetAllDesertsResponseData = GetAllDesertsResponseDataItem[];

export type GetAllDesertsResponse = {
  data: GetAllDesertsResponseData;
  items: number;
  pages: number;
};
