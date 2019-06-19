import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImperativeComponent } from './components/imperative/imperative.component';
import { ReactiveComponent } from './components/reactive/reactive.component';
import { CustomerShellComponent } from './views/customer-shell/customer-shell.component';

const routes: Routes = [
  { path: 'imperative', component: ImperativeComponent },
  { path: 'reactive', component: ReactiveComponent },
  { path: 'customers', component: CustomerShellComponent },
  { path: '', redirectTo: '/imperative', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
