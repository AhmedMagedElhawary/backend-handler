import pino from 'pino';

import {config} from '../../config';

export const initPinoLogger = (name: string): pino.Logger => pino({
    base: {},
    formatters: {
        level: (level) => ({level})
    },
    level: config.logLevel,
    name,
    redact: ['req.headers.authorization'],
    timestamp: pino.stdTimeFunctions.isoTime
});
