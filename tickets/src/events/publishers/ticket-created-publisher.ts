import { Publisher, Subjects, TicketCreatedEvent } from '@abctech/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
