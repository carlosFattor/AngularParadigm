import { Injectable } from '@angular/core';
import { timer } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class ApiService {
  constructor() { }

  private data = [
    'app',
    'apple',
    'application',
    'amplify',
    'free real estate'
  ];

  public fetchData = str => timer(200 + 1.5 * 1000 * Math.random())
    .pipe(
      map(t => this.data
        .filter(item => item.indexOf(str) !== -1)
        .map(item => item.replace(new RegExp(str, 'g'), `<strong>${str}</strong>`))
      ),
      tap(console.log)
    )
}
