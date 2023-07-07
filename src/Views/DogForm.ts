import { Dog } from '../models/Dog'

export class DogForm {
  constructor(
    public parent: Element,
    public model: Dog
    ) {}

  eventsMap(): {[key: string]: () => void} {
    return {
      'click:button': this.onButtonClick,
      'mouseover:h1': this.onHeaderHover
    }
  }

  onButtonClick(): void {
    console.log('Button clicked!')
  }

  onHeaderHover(): void {
    console.log('H1 hovered')
  }
  
  template(): string {
    return `
    <div>
      <h1>Dog Form</h1>
      <div>Breed name: ${this.model.get("breedName")}</div>
      <input />
      <button>Click Me</button>
    </div>
    `;
  };

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');

      fragment.querySelectorAll(selector).forEach(element => {
        element.addEventListener(eventName, eventsMap[eventKey])
      })
    }
  }

  render(): void {
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);

    this.parent.append(templateElement.content);
  }
};