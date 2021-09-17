import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NavController } from '@ionic/angular';
import { FormBuilder, Validators } from '@angular/forms';
import { Storage } from '@capacitor/storage';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {
email: string;
password: any;
phone: any;
data: any;
dataencoded: any;
response: any;
phoneTab: any = false;
emailTab: any = true;
emailForm: any;
phoneForm: any;
phoneData: any;
storeotp: number;
otpSection = false;
loginCard = true;
  constructor(private authService: AuthService, private nav: NavController, private fromBuilder: FormBuilder) {
    this.emailForm = this.fromBuilder.group({
      email: ['',[Validators.required]],
      password: ['', [Validators.required]]
    });

    this.phoneForm = this.fromBuilder.group({
      phone: ['',[Validators.required]],
     });
   }

  ngOnInit() {}
    async logInEmail(){
      this.email = this.emailForm.value.email;
      this.password = this.emailForm.value.password;
     this.dataencoded = btoa(this.email + ':' + this.password);
    try {
      const response: Record<string,any> = await this.authService.loginMethod(this.dataencoded).toPromise();
      if(response.status_code === 'success'){
        this.storeUser(response);
        this.nav.navigateForward('dashboard');
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  async logInPhone(){
    this.phone = this.phoneForm.value.phone;
  try{
    const response: Record<string,any> = await this.authService.otpGenerate(this.phone).toPromise();
    if(response.status_code === 'success'){
       this.loginCard = false;
       this.otpSection = true;
    }
  }
  catch (error) {
    console.log(error);
   }
  }

  storeUser(response: Record<string,any>){
     Storage.set({
       key: 'user',
       value: JSON.stringify(response)
     });
    //  localStorage.setItem('user',JSON.stringify(response));
  }
  tabToggle(tabId){
    if(tabId === 'emailID')
         { this.phoneTab = false;
           this.emailTab = true;
          }
    else{
      this.emailTab = false;
      this.phoneTab = true;
    }
  }

  async verifyOtp(){
    this.phone = this.phoneForm.value.phone;
    this.phoneData = btoa(this.phone +':' +this.storeotp);
    const response: Record<string,any> = await this.authService.verifyLogin(this.phoneData).toPromise();
    console.log(response);
    if(response.status_code === 'success'){
      this.storeUser(response);
      this.nav.navigateForward('dashboard');
    }
  }
 onOtpChange(otp){
   if(otp.length=== 4){
     this.storeotp = otp;
   }
  }

}


