import pino from 'pino';
import { config } from '../../config';

export const initPinoLogger = (name: string): pino.Logger =>
  pino({
    name,
    formatters: {
      level: (level) => ({ level }),
    },
    level: config.logLevel,
    base: {},
    timestamp: pino.stdTimeFunctions.isoTime,
    redact: [
      'req.headers.authorization',
    ],
  });
