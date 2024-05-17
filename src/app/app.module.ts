import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginuserService } from './loginuser.service';

import { ROUTES, RouterModule, Routes } from '@angular/router';

import { Router } from 'express';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
   
 
    
  ],
  providers: [LoginuserService,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
