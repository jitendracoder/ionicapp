import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginComponent} from '../app/components/login/login.component';
import { OtpComponent } from '../app/components/otp/otp.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from 'src/app/guard/auth.guard';
import { NgOtpInputModule } from 'ng-otp-input';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OtpComponent
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,FormsModule,HttpClientModule,ReactiveFormsModule,NgOtpInputModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
