import { Publisher, OrderCancelledEvent, Subjects } from '@abctech/common';

export class OrderCancelledPublisher extends Publisher<
  OrderCancelledEvent
> {
  readonly subject = Subjects.OrderCancelled;
}
