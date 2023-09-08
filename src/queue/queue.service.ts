import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class QueueService {
  constructor(@Inject('QUEUE_SERVICE') private client: ClientProxy) {}

  async publish<T>(data: T): Promise<void> {
    try {
      this.client.emit(data.constructor.name, data);
    } catch (e) {
      throw e;
    }
  }
}
