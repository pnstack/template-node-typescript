// Application type definitions

export interface AppConfig {
  port: number | string;
  nodeEnv: string;
}

export interface ServerResponse {
  status: number;
  message: string;
}
