import { healthCheckHandler } from './api/healthCheck';
import { smokeTestHandler } from './api/smokeTest';
import { errorHandler } from './middleware/errorHandler';
import appRouter from './router/appRouter';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

const app = express();

app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(YAML.load(`${process.cwd()}/src/swagger/swagger-config.yml`)),
);

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
