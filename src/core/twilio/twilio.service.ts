import { Injectable } from '@nestjs/common';
import { twiml } from 'twilio';
import MessagingResponse = require('twilio/lib/twiml/MessagingResponse');

@Injectable()
export class TwilioService {
  private messagingResponse;

  constructor() {
    this.messagingResponse = twiml.MessagingResponse;
  }

  messageResonse(): MessagingResponse.Message {
    const message = new this.messagingResponse();
    return message.message();
  }
}
