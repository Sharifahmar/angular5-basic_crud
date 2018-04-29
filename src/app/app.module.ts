import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UserComponent } from './user/user.component';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';
import { UserRoutingModule }  from '../app/user/user-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UserServiceService } from './user/user-service.service';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule }  from '../app/home/home-routing.module';
import { FormComponent } from './form/form.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    UserComponent,
    HomeComponent,
    FormComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpModule,
    UserRoutingModule,
    HttpClientModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule
    



  
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
