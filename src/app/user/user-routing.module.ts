import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { FormComponent } from '../form/form.component';
const routes: Routes = [
  { path: 'Users', component: UserComponent},
  { path: 'Users/Create', component: FormComponent },
  { path: 'Users/:id', component: FormComponent }];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
