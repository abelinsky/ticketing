import { Publisher, OrderCreatedEvent, Subjects } from '@abctech/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
