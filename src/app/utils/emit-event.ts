export class EmitEvent {
  name: Events;
  value: any;

  constructor(name: Events, value: any) {
    this.name = name;
    this.value = value;
  }
}
