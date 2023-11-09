import { json, urlencoded } from 'express';
import cors from 'cors';

import { App } from './app';
import { config } from './config';

// Routes
import { OasisRouter } from './modules/oasis/oasis.ruter';
import { DesertRouter } from './modules/desert/desert.router';

export const CreateApiRest = async () => {
  const api = await App();
  // App config
  api.use(cors());
  api.use(urlencoded({ extended: true }));
  api.use(json());

  // Init routes
  api.use('/oases', OasisRouter);
  api.use('/deserts', DesertRouter);

  return api;
};
