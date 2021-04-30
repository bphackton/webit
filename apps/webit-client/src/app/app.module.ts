import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebitMovementsComponent } from './components/webit-movements/webit-movements.component';
import { WebitHomepageComponent } from './components/webit-homepage/webit-homepage.component';
import { WebitQrCodeComponent } from './components/webit-qr-code/webit-qr-code.component';
import { WebitMovementsListComponent } from './components/webit-movements-list/webit-movements-list.component';
import { WebitMovementDetailsComponent } from './components/webit-movement-details/webit-movement-details.component';
import { WebitWaitingMovementDetailsComponent } from './components/webit-waiting-movement-details/webit-waiting-movement-details.component';
import { WebitHomepageService } from './components/webit-homepage/webit-homepage.service'
import { UserAgentService } from './user-agent.service'
import { HttpClientModule } from '@angular/common/http';
import { WebitMovementsSummaryComponent } from './components/webit-movements-summary/webit-movements-summary.component';
import {QRCodeModule} from 'angular2-qrcode';
import {AuthService} from './auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { WebitPaymentScreenComponent } from './components/webit-payment-screen/webit-payment-screen.component';
import { PaymentService } from './payment-service';

@NgModule({
  declarations: [
    AppComponent,
    WebitMovementsComponent,
    WebitHomepageComponent,
    WebitQrCodeComponent,
    WebitMovementsListComponent,
    WebitMovementDetailsComponent,
    WebitWaitingMovementDetailsComponent,
    WebitMovementsSummaryComponent,
    WebitPaymentScreenComponent
  ],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        QRCodeModule,
        ReactiveFormsModule
    ],
  providers: [UserAgentService, WebitHomepageService, AuthService, PaymentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
