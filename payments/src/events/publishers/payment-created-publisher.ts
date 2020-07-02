import { Subjects, Publisher, PaymentCreatedEvent } from '@abctech/common';

export class PaymentCreatedPublisher extends Publisher<
  PaymentCreatedEvent
> {
  readonly subject = Subjects.PaymentCreated;
}
