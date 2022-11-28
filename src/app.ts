import express from 'express';
// import swaggerUi from 'swagger-ui-express';
// import YAML from 'yamljs';

import { healthCheckHandler } from './api/healthCheck';
import { smokeTestHandler } from './api/smokeTest';
import { config } from '../config';
import { errorHandler } from './middleware/errorHandler';
import appRouter from './router/appRouter';
import { initPinoLogger } from './framework/logger';

const logger = initPinoLogger("app");

const app = express();

//TODO : add support for swagger
// app.use(
//   '/api-docs',
//   swaggerUi.serve,
//   // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
//   swaggerUi.setup(YAML.load(`${process.cwd()}/src/swagger/swagger-config.yml`)),
// );

app.get('/health', healthCheckHandler);
app.get('/smoke', smokeTestHandler);

app.use('/', appRouter);
app.use(errorHandler);

app.listen(config.port, () => {
  logger.info(`listening on port ${config.port}!`);
});

// TODO: install jest ts-jest @types/jest and update scripts
// TODO: install husky
// TODO: check  "pino-pretty" , "prettier"
