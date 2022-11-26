export enum ErrorType {
  NOT_FOUND = 'NOT_FOUND',
  BAD_REQUEST = 'BAD_REQUEST',
  FORBIDDEN = 'FORBIDDEN',
  UNAUTHORIZED = 'UNAUTHORIZED',
  INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',
}

export class AppError extends Error {
  status: number;
  errorType: ErrorType;
  message: string;

  constructor({
    status,
    errorType,
    message,
  }: {
    status: number;
    errorType: ErrorType;
    message: string;
  }) {
    super(message);
    this.status = status;
    this.errorType = errorType;
    this.message = message;
  }

  static badRequest(message: string): AppError {
    return new AppError({
      status: 400,
      errorType: ErrorType.BAD_REQUEST,
      message,
    });
  }

  static unauthorized(message: string): AppError {
    return new AppError({
      status: 401,
      errorType: ErrorType.UNAUTHORIZED,
      message,
    });
  }

  static forbidden(message: string): AppError {
    return new AppError({
      status: 403,
      errorType: ErrorType.FORBIDDEN,
      message,
    });
  }

  static notFound(message: string): AppError {
    return new AppError({
      status: 404,
      errorType: ErrorType.NOT_FOUND,
      message,
    });
  }

  static internalError(message: string): AppError {
    return new AppError({
      status: 500,
      errorType: ErrorType.INTERNAL_SERVER_ERROR,
      message,
    });
  }

  toObject(): { status: number; errorType: string; message: string } {
    return {
      status: this.status,
      errorType: this.errorType,
      message: this.message,
    };
  }
}
