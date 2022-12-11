import { config } from '../../config';
import pino from 'pino';

export const initPinoLogger = (name: string): pino.Logger =>
  pino({
    base: {},
    formatters: {
      level: (level) => ({ level }),
    },
    level: config.logLevel,
    name,
    redact: ['req.headers.authorization'],
    timestamp: pino.stdTimeFunctions.isoTime,
  });
