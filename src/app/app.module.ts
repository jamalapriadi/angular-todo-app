import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';

const appRoutes:Routes=[
  {
    path:'welcome',
    component:WelcomeComponent,
    data:{title: 'Front Page'}
  },
  {
    path:'login',
    component:LoginComponent,
    data:{title:'Login Page'}
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    data:{title:'Dashboard'}
  },
  {
    path:'',
    redirectTo:'/welcome',
    pathMatch:'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    RouterModule.forRoot(
      appRoutes,{ enableTracing:true}
    )
  ],
  exports:[MatButtonModule, MatCheckboxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
