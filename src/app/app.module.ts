import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { MainpageComponent } from './common/mainpage/mainpage.component';
import { AddcartComponent } from './pages/addcart/addcart.component';
import { ViewcartComponent } from './pages/viewcart/viewcart.component';
import { CardComponent } from './pages/card/card.component';
import { FooterComponent } from './common/footer/footer.component';
import { SilderComponent } from './common/silder/silder.component';
import { HomeComponent } from './common/home/home.component';
import { ShowcartComponent } from './pages/showcart/showcart.component';
import { LoginComponent } from './pages/login/login.component';
import { SnipperComponent } from './snipper/snipper.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainpageComponent,
    AddcartComponent,
    ViewcartComponent,
    CardComponent,
    FooterComponent,
    SilderComponent,
    HomeComponent,
    ShowcartComponent,
    LoginComponent,
    SnipperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
