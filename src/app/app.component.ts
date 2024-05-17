import { Component } from '@angular/core';
import { Logindata } from './logindata';
import { LoginuserService } from './loginuser.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrected property name
})
export class AppComponent {
  title = 'login';
  ld: Logindata= new Logindata();
  u:Logindata[];
  // Initialize ld directly
  constructor(public ls: LoginuserService,public r:Router) {}
   // Subscription to handle unsubscribing onDestroy
   private loginSubscription: Subscription;

   
 
   loginUser() {
     // Assuming loginUser returns an Observable
     this.loginSubscription = this.ls.loginUser(this.ld).subscribe(
       (data) => {
         alert("Success");
         console.log(data); // Log response data inside the success callback
         // Further actions upon successful login
       },
       (error) => {
         alert("Username already taken");
         console.log(error); // Log error inside the error callback
         // Further error handling
       }
     );
   }
 
   ngOnDestroy() {
     // Unsubscribe to avoid memory leaks
     if (this.loginSubscription) {
       this.loginSubscription.unsubscribe();
     }
   }




   get(){
    this.ls.GetUser().subscribe(data =>{
      this.u=data;
    });
  }
}
