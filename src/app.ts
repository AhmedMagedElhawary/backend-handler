import express from 'express';

/*
 * Import swaggerUi from 'swagger-ui-express';
 * import YAML from 'yamljs';
 */

import { healthCheckHandler } from './api/healthCheck';
import { smokeTestHandler } from './api/smokeTest';

import { errorHandler } from './middleware/errorHandler';
import appRouter from './router/appRouter';

const app = express();

/*
 * TODO : add support for swagger
 * app.use(
 *   '/api-docs',
 *   swaggerUi.serve,
 *   // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
 *   swaggerUi.setup(YAML.load(`${process.cwd()}/src/swagger/swagger-config.yml`)),
 * );
 */

app.get('/health', healthCheckHandler);
app.get('/smoke', smokeTestHandler);

app.use('/', appRouter);
app.use(errorHandler);

export default app;

/*
 * TODO: install husky
 * TODO: fix lint issues, remove format from the script and include it in lint
 */
