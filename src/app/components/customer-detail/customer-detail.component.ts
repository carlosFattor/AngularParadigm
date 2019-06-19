import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Customer } from 'src/app/models/customer';
import { EventBusService } from 'src/app/services/event-bus.service';
import { Events } from 'src/app/utils/events.enum';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit, OnDestroy {
  customer: Customer;
  subSink = new Subscription();
  constructor(private eventBus: EventBusService) { }

  ngOnInit() {
    this.subSink = this.eventBus.on(Events.CUSTOMER, ((cust: Customer) => this.customer = cust));
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }

}
