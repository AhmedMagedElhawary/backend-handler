import { config } from '../config';
import app from './app';
import { initPinoLogger } from './framework/logger';

const logger = initPinoLogger('server');

app.listen(config.port, () => {
  logger.info(`listening on port ${config.port}!`);
});
