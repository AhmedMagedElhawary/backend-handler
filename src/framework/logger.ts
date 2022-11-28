import pino from 'pino';
import { config } from '../../config';

// TODO: check if log levels should be 10, 20
export enum LEVEL {
  FATAL = 'fatal',
  ERROR = 'error',
  WARN = 'warn',
  INFO = 'info',
  DEBUG = 'debug',
  TRACE = 'trace',
  SILENT = 'silent'
}

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
