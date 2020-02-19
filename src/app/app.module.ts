import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LOCALE_ID} from '@angular/core';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { ProductModule } from './product-list/product.module';
import { WelcomeComponent } from './home/welcome.component';
import { PagenotfoundComponent } from './home/pagenotfound.component';
import { ProductListRoutingModule } from './product-list/product-list-routing.module';
registerLocaleData(localeEs);
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductModule,
    ProductListRoutingModule,
    AppRoutingModule,

  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'es-ES'
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
