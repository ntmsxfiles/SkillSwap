import EventEmitter from "eventemitter3"; // Or 'events' from Node.js if using a bundler like Webpack
import { EventType } from "./EventType";

class EventEmitterWrapperClass {
  private _eventEmiiter: EventEmitter;
  constructor() {
    this._eventEmiiter = new EventEmitter();
  }

  subcribeUserUpdate(cb: (...args: unknown[]) => void) {
    this.subscribe(EventType.updateUser, cb);
  }

  unsubcribeUserUpdate(cb: (...args: unknown[]) => void) {
    this.unsubscribe(EventType.updateUser, cb);
  }

  subcribeLikedUserUpdate(cb: (...args: unknown[]) => void) {
    this.subscribe(EventType.updateLikedUser, cb);
  }

  unsubcribeLikedUserUpdate(cb: (...args: unknown[]) => void) {
    this.unsubscribe(EventType.updateLikedUser, cb);
  }

  subscribe(event: EventType, cb: (...args: unknown[]) => void) {
    this._eventEmiiter.addListener(event, cb);
  }

  unsubscribe(event: EventType, cb: (...args: unknown[]) => void) {
    this._eventEmiiter.removeListener(event, cb);
  }

  publish(event: EventType, data: unknown) {
    this._eventEmiiter.emit(event, data);
  }
}

export const EventEmitterWrapper = new EventEmitterWrapperClass();
