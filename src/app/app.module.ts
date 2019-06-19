import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ApiService } from 'src/app/services/api.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { ImperativeComponent } from './components/imperative/imperative.component';
import { ReactiveComponent } from './components/reactive/reactive.component';
import { EventBusService } from './services/event-bus.service';
import { CustomerShellComponent } from './views/customer-shell/customer-shell.component';


@NgModule({
  declarations: [
    AppComponent,
    ImperativeComponent,
    ReactiveComponent,
    CustomersListComponent,
    CustomerDetailComponent,
    CustomerShellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ApiService, EventBusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
