import { BackgroundImageComponent } from './landing/background-Image/background-Image.component';
import { LoveNumberComponent } from './landing/love-number/love-number.component';
import { ServicesComponent } from './landing/services/services.component';
import { FooterComponent } from './landing/footer/footer.component';
import { AboutComponent } from './landing/about/about.component';
import { HomeComponent } from './landing/home/home.component';
import { FeatureCardComponent } from './landing/services/service-card/feature-card.component';
import { HeaderParagraphComponent } from './landing/header-paragraph/header-paragraph.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './landing/navbar/navbar.component';
import { HeaderCarouselComponent } from './landing/header-carousel/header-carousel.component';
import { OurFeatureComponent } from './landing/our-feature/our-feature.component';
import { ContactComponent } from './landing/contact/contact.component';
import { ContactFormComponent } from './landing/contact/contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderCarouselComponent,
    OurFeatureComponent,
    FeatureCardComponent,
    HeaderParagraphComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    ContactComponent,
    ContactFormComponent,
    ServicesComponent,
    LoveNumberComponent,
    BackgroundImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
