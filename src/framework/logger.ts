import pino from 'pino';

enum LEVEL {
  FATAL = 'fatal',
  ERROR = 'error',
  WARN = 'warn',
  INFO = 'info',
  DEBUG = 'debug',
  TRACE = 'trace',
}

export const initPinoLogger = (name: string): pino.Logger =>
  pino({
    name,
    formatters: {
      level: (level) => ({ level }),
    },
    level: LEVEL.DEBUG,
    base: {},
    timestamp: pino.stdTimeFunctions.isoTime,
    redact: [
      'req.headers.authorization',
    ],
  });
