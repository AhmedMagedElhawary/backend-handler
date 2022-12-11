/*
 * Import swaggerUi from 'swagger-ui-express';
 * import YAML from 'yamljs';
 */
import { healthCheckHandler } from './api/healthCheck';
import { smokeTestHandler } from './api/smokeTest';
import { errorHandler } from './middleware/errorHandler';
import appRouter from './router/appRouter';
import express from 'express';

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
 * TODO list
 * Install husky
 * Enable swagger
 * Read about schema validation
 * Read about wrap async
 * Read about function format
 * Check all off rules under eslint
 */
