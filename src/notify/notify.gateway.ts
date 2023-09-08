import { Inject, LoggerService } from '@nestjs/common';
import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { WebSocketServer as Server } from 'ws';

@WebSocketGateway({ path: '/notify', cors: { origin: '*' } })
export class NotifyGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;

  constructor(
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

  afterInit() {
    this.logger.log(this.server.path, NotifyGateway.name);
  }

  handleConnection() {
    this.logger.log('A client has connected.', NotifyGateway.name);
  }

  handleDisconnect() {
    this.logger.log('A client has disconnected', NotifyGateway.name);
  }

  @SubscribeMessage('notify')
  onEvent(@MessageBody() data: any): WsResponse<unknown> {
    this.logger.log('A notification has been sent', NotifyGateway.name);
    return data;
  }
}
