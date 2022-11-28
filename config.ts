import { LEVEL } from "./src/framework/logger";

export type Environment = 'local' | 'test' |'dev' | 'prod';

interface Config {
  environment: Environment;
  logLevel: LEVEL;
  name: string;
  port?: number;
}

const configs: Record<Environment, () => Omit<Config, 'environment'>> = {
  local: () => ({
    logLevel: LEVEL.DEBUG,
    name: 'backend-handler',
    port: 8080,
  }),

  test: () => ({
    ...configs.local(),
    logLevel: LEVEL.SILENT,
  }),

  dev: () => ({
    ...configs.local(),
    logLevel: LEVEL.INFO,
  }),

  prod: () => ({
    ...configs.local(),
    logLevel: LEVEL.INFO,
    port: 80,
  }),
};

const environment : Environment  = process.env.ENVIRONMENT as Environment

export const config: Config = {
  ...configs[environment](),
  environment,
};