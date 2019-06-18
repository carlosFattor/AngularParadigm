import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-paradigm',
  template: `<h1>Imperative Typeahead</h1>
    <div>
      <input type="text"
          placeholder="Search Term"
          [ngModel]="searchTerm"
          (ngModelChange)="changeSearchTerm($event)" />
      <ul>
        <li *ngFor="let item of data" [innerHTML]="item"></li>
      </ul>
    </div>
  `
})
export class ImperativeComponent implements OnDestroy {

  searchTerm = '';
  data: string[];
  subscription: Subscription;

  constructor(private apiService: ApiService) { }

  changeSearchTerm(term) {
    this.subscription = this.apiService.fetchData(term)
      .subscribe(data => this.data = data);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
