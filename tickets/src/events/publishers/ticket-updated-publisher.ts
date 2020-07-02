import { Publisher, Subjects, TicketUpdatedEvent } from '@abctech/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
