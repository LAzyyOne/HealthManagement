import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTestComponent } from './add-test/add-test.component';
import { ListTestComponent } from './list-test/list-test.component';
import {HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from  '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component'
@NgModule({
  declarations: [
    AppComponent,
    AddTestComponent,
    ListTestComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
