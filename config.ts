//TODO: add support for env variables and configurations

export type Environment = typeof environments[number];
const environments = ['local', 'test', 'dev', 'prod'] as const;

interface Config {
  environment: Environment;
  logLevel: string;
  port?: number;
}
export const config : Config = {
  // ...configs[environment](),
  environment: 'local',
  logLevel: 'debug',
  port: 8080,
};
