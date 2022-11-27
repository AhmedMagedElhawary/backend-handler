declare namespace Express { // TODO: check if it is better to use env variables
  export interface Request {
    logTags?: {
      endPoint?: string;
      userAgent?: string;
      http?: {
        method?: string;
        status_code?: number;
      };
    };
  }
}
