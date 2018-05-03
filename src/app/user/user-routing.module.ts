import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { FormComponent } from '../form/form.component';
import { LoginGuard } from '../guards/login-guards';
import { LoginComponent } from '../login/login.component';
const routes: Routes = [
  { path: 'Users', component: UserComponent,canActivate: [LoginGuard]},
  { path: 'Users/Create', component: FormComponent },
  { path: 'Users/:id', component: FormComponent }, 
  { path: 'Login', component: LoginComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
