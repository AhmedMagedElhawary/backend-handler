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
      errorType: ErrorType.BAD_REQUEST,
      message,
      status: 400,
    });
  }

  static unauthorized(message: string): AppError {
    return new AppError({
      errorType: ErrorType.UNAUTHORIZED,
      message,
      status: 401,
    });
  }

  static forbidden(message: string): AppError {
    return new AppError({
      errorType: ErrorType.FORBIDDEN,
      message,
      status: 403,
    });
  }

  static notFound(message: string): AppError {
    return new AppError({
      errorType: ErrorType.NOT_FOUND,
      message,
      status: 404,
    });
  }

  static internalError(message: string): AppError {
    return new AppError({
      errorType: ErrorType.INTERNAL_SERVER_ERROR,
      message,
      status: 500,
    });
  }

  toObject(): { status: number; errorType: string; message: string } {
    return {
      errorType: this.errorType,
      message: this.message,
      status: this.status,
    };
  }
}
