import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment } from '../environments/environment';
export const firebaseConfig = environment.firebaseConfig;

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
// import { MyDetailsComponent } from './home/my-details/my-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // MyDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
