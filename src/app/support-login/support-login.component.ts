import { Component, OnInit ,ViewChild } from '@angular/core';
import {ShowhideDirective} from '../directives/showhide.directive';
import {Router} from '@angular/router';
import {LoginService} from '../services/loginService';

@Component({
  selector: 'app-support-login',
  templateUrl: './support-login.component.html',
  styleUrls: ['./support-login.component.css']
})
export class SupportLoginComponent implements OnInit {
 public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
 public phoneNumber = "";
 public emailId = "";
 response: any;
  LoginFailure;
  LoginFailureContactMessage;
  LoginFailureContactAdmin;
  LoginFailMessage;
  loadingSpinnerImage;
  shownphonenumber;
  showUserName;
  showpasswordempty;
  password;
  show = false;
  @ViewChild(ShowhideDirective) input: ShowhideDirective;
  constructor(
    private router: Router,private loginService:LoginService
    ) { }
  ngOnInit() {
    this.LoginFailMessage=false;
  }
 toggleShow() {
    if (this.password != null) {
      this.show = !this.show;
      console.log(this.input);
      if (this.show) {
        this.input.changeType("text");
      }
      else {
        this.input.changeType("password");
      }
    }
  }
  onSubmit(loginForm) {
   // if(this.phoneNumber!=undefined && this.phoneNumber!='' && this.password!=undefined && this.password!=''){
     if(this.emailId!=undefined && this.emailId!='' && this.password!=undefined && this.password!=''){
    console.log(loginForm);
    this.LoginFailMessage = false;
   /* let data = {
      "businessPhone": this.phoneNumber.replace(/\D+/g, ''),
      "password": loginForm.password
    }*/
    let data = {
      "emailId": this.emailId,
      "password": loginForm.password
    }
    this.loginService.login(data).subscribe(response=>{
      console.log(response);
      if(response.text()=="SupportLogin not found"){
      this.LoginFailMessage=true;
      this.LoginFailure="User Authentication failed.";
      this.LoginFailureContactMessage = "Try again or contact your";
      this.LoginFailureContactAdmin = "http://network@bankofamerica.com";
      }
    else{
      this.LoginFailMessage=false;
      this.router.navigate(['/applications']);
    }
    })

     

  }
}
} 