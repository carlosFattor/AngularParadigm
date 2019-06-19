import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { EventBusService } from 'src/app/services/event-bus.service';
import { Events } from 'src/app/utils/events.enum';
import { Customer } from '../../models/customer';
import { ApiService } from '../../services/api.service';
import { EmitEvent } from '../../utils/emit-event';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent {
  customers$: Observable<Customer[]>;

  constructor(private eventBus: EventBusService, apiService: ApiService) {
    this.customers$ = apiService.fetchCustomer();
  }

  selectCustomer(cust: Customer): void {
    this.eventBus.emit(new EmitEvent(Events.CUSTOMER, cust));
  }
}
