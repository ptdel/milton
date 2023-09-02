import {
  CallHandler,
  ExecutionContext,
  Inject,
  Injectable,
  LoggerService,
  NestInterceptor,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { Observable, tap } from 'rxjs';
import { v4 } from 'uuid';

export interface Response<T> {
  data: T;
}

@Injectable()
export class LoggingInterceptor<T> implements NestInterceptor<T, Response<T>> {
  /**
   * `LoggingInterceptor` class.
   *
   * @remarks We're leveraging the NestJS concept of Interceptors for logging.
   * This gives us the ability to have a single class for defining our logging
   * behavior, while keeping the logic itself to log out of our code. The benefit
   * of this is that we can focus on business logic, with the understanding that
   * anything called in our controllers (or resolvers) will be captured.
   *
   * @param logger - an injected instance of the LoggerService.
   * @param configService - an injected instance of the ConfigService.
   */
  constructor(
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
    private readonly configService: ConfigService,
  ) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    /**
     * we generate a new uuidv4 per call so that a request can be mapped
     * to a response.
     */
    const requestId = v4();
    const level = this.configService.get<string>('log.level');

    /**
     * We pull the `Request` object out of the `ExecutionContext`, so that we
     * can log information about it.
     */
    const ctx = context.switchToHttp().getRequest<Request>();

    /** the route being called */
    const url = ctx.url;

    /** logs the arguments passed to the controller. */
    this.logger.log(
      { level, message: JSON.stringify(ctx.body) },
      `${url} - ${requestId}`,
    );

    /** logs the data returned by the operation. */
    return next.handle().pipe(
      tap((data) => {
        this.logger.log(
          { level, message: JSON.stringify(data) },
          `${url} - ${requestId}`,
        );
      }),
    );
  }
}
