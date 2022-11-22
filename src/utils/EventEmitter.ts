import isString from "./isString";
import isSymbol from "./isSymbol";
import isFunction from "./isFunction";

export type EventName = string | symbol;
export interface EventListener {
  (...args: any[]): void;
}

interface EventListenerWrapper extends EventListener {
  __LISTENER__?: EventListener;
}

const MAX = 100;
const warned: { [message: string]: boolean } = {};

function checkName(name: unknown) {
  if (!isString(name) && !isSymbol(name)) {
    throw new TypeError(
      `Event name must be a string or a symbol. Received: ${typeof name}`
    );
  }
  if (name === "") {
    throw new TypeError("Event name can not be an empty string.");
  }
}

function checkListener(listener: unknown) {
  if (!isFunction(listener)) {
    throw new TypeError(
      `Event listener must be a function. Received: ${typeof listener}`
    );
  }
}

class EventEmitter {
  private readonly events: {
    [name: EventName]: EventListenerWrapper[] | undefined;
  } = Object.create(null);

  on(name: EventName, listener: EventListener) {
    checkName(name);
    checkListener(listener);

    let listeners = this.events[name];
    if (listeners) {
      listeners.push(listener);
    } else {
      listeners = this.events[name] = [listener];
    }

    if (listeners.length > MAX) {
      // prettier-ignore
      const message = `More than ${MAX} \`${String(name)}\` events are listened to, which may lead to memory leaks.`;
      if (!warned[message]) {
        console.warn(message);
        warned[message] = true;
      }
    }

    return this;
  }

  once(name: EventName, listener: EventListener) {
    checkName(name);
    checkListener(listener);

    const wrapper: EventListenerWrapper & {
      __LISTENER__: EventListener;
    } = (...args: any[]) => {
      this.off(name, wrapper.__LISTENER__);
      wrapper.__LISTENER__(...args);
    };

    wrapper.__LISTENER__ = listener;
    this.on(name, wrapper);

    return this;
  }

  off(name: EventName, listener: EventListener) {
    checkName(name);
    checkListener(listener);

    const listeners = this.events[name];
    if (listeners) {
      let position = -1;
      for (let i = listeners.length - 1; i >= 0; i--) {
        if (
          listeners[i] === listener ||
          listeners[i].__LISTENER__ === listener
        ) {
          position = i;
          break;
        }
      }
      if (position >= 0) {
        listeners.splice(position, 1);
      }
      if (listeners.length === 0) {
        delete this.events[name];
      }
    }

    return this;
  }

  emit(name: EventName, ...args: any[]) {
    checkName(name);

    let listeners = this.events[name];
    if (listeners) {
      listeners = [...listeners];
      for (let i = 0; i < listeners.length; i++) {
        try {
          listeners[i](...args);
        } catch (error) {
          console.error(error);
        }
      }
    }

    return this;
  }

  count(name?: EventName): number {
    let sum = 0;

    if (name !== undefined) {
      sum = this.events[name]?.length || 0;
    } else {
      [
        ...Object.getOwnPropertyNames(this.events),
        ...Object.getOwnPropertySymbols(this.events),
      ].forEach((name) => {
        sum += this.events[name]?.length || 0;
      });
    }

    return sum;
  }
}

export default EventEmitter;
