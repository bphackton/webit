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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {CacheService} from './cache.service';
import { MainSideViewComponent } from './components/main-side-view/main-side-view.component';
import { SettingComponent } from './components/setting/setting.component';
import { QrReaderComponent } from './components/qr-reader/qr-reader.component';

@NgModule({
  declarations: [
    AppComponent,
    MovementsComponent,
    HomepageComponent,
    QrCodeComponent,
    MovementsListComponent,
    MovementDetailsComponent,
    MovementsSummaryComponent,
    MainSideViewComponent,
    SettingComponent,
    QrReaderComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    QRCodeModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    FormsModule
  ],
  providers: [UserAgentService, HomepageService, AuthService, CacheService],
  bootstrap: [AppComponent]
})
export class AppModule { }
