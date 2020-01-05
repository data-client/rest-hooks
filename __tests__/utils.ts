export function mockEventHandlers() {
  const eventMap: {
    [k: string]: Set<EventListener>;
  } = {};
  window.addEventListener = jest.fn((event, cb) => {
    if (!(event in eventMap)) {
      eventMap[event] = new Set();
    }
    eventMap[event].add(cb as any);
  });
  window.removeEventListener = jest.fn((event, cb) => {
    if (event in eventMap) {
      eventMap[event].delete(cb as any);
    }
  });
  const triggerEvent = (name: string, event: Event) => {
    if (eventMap[name] === undefined) return;
    for (const cb of eventMap[name]) {
      cb(event);
    }
  };
  return triggerEvent;
}
