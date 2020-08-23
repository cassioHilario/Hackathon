import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { ControleComponent } from './components/controle/controle.component';
import { DashboardsComponent } from './components/dashboards/dashboards.component';
import { ChartsModule } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { ContainerDataService } from './services/container-data.service';
import { RegistroComponent } from './components/registro/registro.component';
import { MaterialModule } from './material.module';
import { DatePipe } from '@angular/common';
import { InfoContainerComponent } from './components/info-container/info-container.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ControleComponent,
    DashboardsComponent,
    RegistroComponent,
    InfoContainerComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    HttpClientModule
  ],
  providers: [ContainerDataService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
