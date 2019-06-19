import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { EmitEvent } from 'src/app/utils/emit-event';
import { Events } from '../utils/events.enum';

@Injectable()
export class EventBusService {

  private subject$ = new Subject();

  constructor() { }

  emit(event: EmitEvent): void {
    this.subject$.next(event);
  }

  on(event: Events, action: any): Subscription {
    return this.subject$.pipe(
      filter((e: EmitEvent) => e.name === event),
      map((e: EmitEvent) => e.value)
    ).subscribe(action);
  }
}
