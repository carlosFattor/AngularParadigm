import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImperativeComponent } from './app/imperative/imperative.component';
import { ReactiveComponent } from './app/reactive/reactive.component';

const routes: Routes = [
  { path: 'imperative', component: ImperativeComponent },
  { path: 'reactive', component: ReactiveComponent },
  { path: '', redirectTo: '/imperative', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
