import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovementsComponent } from './components/movements/movements.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { QrCodeComponent } from './components/qr-code/qr-code.component';
import { MovementsListComponent } from './components/movements-list/movements-list.component';
import { MovementDetailsComponent } from './components/movement-details/movement-details.component';
import { HomepageService } from './components/homepage/homepage.service'
import { UserAgentService } from './user-agent.service'
import { HttpClientModule } from '@angular/common/http';
import { MovementsSummaryComponent } from './components/movements-summary/movements-summary.component';
import {QRCodeModule} from 'angular2-qrcode';
import {AuthService} from './auth.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MovementsComponent,
    HomepageComponent,
    QrCodeComponent,
    MovementsListComponent,
    MovementDetailsComponent,
    MovementsSummaryComponent
  ],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        QRCodeModule,
        ReactiveFormsModule
    ],
  providers: [UserAgentService, HomepageService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
