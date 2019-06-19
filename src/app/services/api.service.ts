import { Injectable } from '@angular/core';
import { Observable, of, timer } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { Customer } from '../models/customer';

@Injectable()
export class ApiService {
  constructor() { }

  private customers: Array<Customer>;
  private data = [
    'app',
    'apple',
    'application',
    'amplify',
    'free real estate'
  ];

  fetchCustomer(): Observable<Customer[]> {
    return timer(200 + 1.5 * 1000 * Math.random()).pipe(
      map(() => {
        this.customers = new Array<Customer>();
        this.customers.push(new Customer('Carlos', 1), new Customer('Fattor', 2))
      }),
      switchMap(() => of(this.customers))
    );
  }

  fetchData = str => timer(200 + 1.5 * 1000 * Math.random())
    .pipe(
      map(t => this.data
        .filter(item => item.indexOf(str) !== -1)
        .map(item => item.replace(new RegExp(str, 'g'), `<strong>${str}</strong>`))
      ),
      tap(console.log)
    )
}
