import { config } from '../config';
import { initPinoLogger } from './framework/logger';
import app from './app'

const logger = initPinoLogger("server");

app.listen(config.port, () => {
  logger.info(`listening on port ${config.port}!`);
});