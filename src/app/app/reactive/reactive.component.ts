import { ChangeDetectionStrategy, Component } from '@angular/core';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { Subject } from 'rxjs/internal/Subject';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-reactive',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<h1>Reactive Typeahead</h1>
      <div>
        <input type="text"
            placeholder="Search Term"
            [ngModel]="searchTerm$ | async"
            (ngModelChange)="searchTerm$.next($event)" />
        <ul>
          <li *ngFor="let item of data$ | async" [innerHTML]="item"></li>
        </ul>
      </div>
    `
})
export class ReactiveComponent {

  searchTerm$ = new Subject();

  data$ = this.searchTerm$.pipe(
    switchMap(term => this.apiService.fetchData(term))
  );

  constructor(private apiService: ApiService) { }

}
