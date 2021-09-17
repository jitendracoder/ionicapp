import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  loginMethod(data){
    console.log(btoa(environment.xAuthorization));
    const apiUrl: any = `${environment.baseUrl}/users/login`;
    const headers = new HttpHeaders().set('X-Authorization', btoa(environment.xAuthorization)
    ).set('Authorization','Basic '+data);
    return this.httpClient.post(apiUrl,{},{ headers });
  }

  otpGenerate(phoneNumber){
    console.log(phoneNumber);
    const apiUrL: any=`${environment.baseUrl}/users/generate_otp`;
    const headers = new HttpHeaders().set('X-Authorization', btoa(environment.xAuthorization))
    .set('Authorization','Basic'+btoa(phoneNumber));
    return this.httpClient.post(apiUrL,{user_phone: phoneNumber},{headers});
  }

  verifyLogin(otp){
    console.log(otp);
    const apiUrl: any = `${environment.baseUrl}/users/login_otp`;
    const headers = new HttpHeaders().set('X-Authorization',btoa(environment.xAuthorization))
    .set('Authorization', 'Basic '+otp);
    return this.httpClient.post(apiUrl,{},{headers});

  }
}


