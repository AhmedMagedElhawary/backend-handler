declare namespace Express {
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
