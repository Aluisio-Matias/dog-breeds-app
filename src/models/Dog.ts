interface DogProps {
  breedName?: string;
  scientificName?: string;
  coolName?: string;
  temperament?: string;
  lifeSpan?: string;
  dailySleep?: string;
  gestationPeriod?: string;
};

//type alias - callback funtion that doesn't return anything
type Callback = () => void;

export class Dog {
  events: {[key: string]: Callback[]} = {};
  
  constructor(private data: DogProps) {}

  get(propName: string): (number | string) {
    return this.data[propName];
  };

  set(update: DogProps): void {
    Object.assign(this.data, update)
  };

  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  };

  trigger(eventName: string): void {
    const handlers = this.events[eventName];
    if (!handlers || handlers.length === 0) return;

    handlers.forEach(callback => {
      callback();
    })
  };
}