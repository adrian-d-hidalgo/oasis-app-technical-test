import { CreateApiRest } from './api-rest';
import { config } from './config';

export const bootstrap = async () => {
  const api = await CreateApiRest();

  // Run server
  const { port } = config.app;
  api.listen(port, () => console.log(`App running on port: ${port}`));
};
