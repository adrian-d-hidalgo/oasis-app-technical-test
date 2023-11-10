import { Router } from 'express';

import { OasisService } from './oasis.service';

const OasisRouter = Router();

const oasisService = new OasisService();

OasisRouter.post('/', async (req, res) => {
  const oasis = await oasisService.create(req.body);
  res.send({ data: oasis });
});

OasisRouter.get('/', async (req, res) => {
  const { desertId = 'undefined', water = 'undefined' } = req.query;

  const filters = {
    desertId: desertId !== 'undefined' ? Number(desertId) : undefined,
    water: water !== 'undefined' ? Number(water) : undefined,
  };

  const oases = await oasisService.getAll(filters);
  res.send(oases);
});

export { OasisRouter };
