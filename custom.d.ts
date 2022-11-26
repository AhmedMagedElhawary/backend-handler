declare namespace Express {
  export interface Request {
    logTags?: {
      country?: string;
      endPoint?: string;
      userAgent?: string;
      http?: {
        method?: string;
        status_code?: number;
      };
    };
  }
}
