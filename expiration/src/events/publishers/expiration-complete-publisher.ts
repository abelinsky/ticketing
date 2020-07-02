import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@abctech/common';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  readonly subject = Subjects.ExpirationComplete;
}
