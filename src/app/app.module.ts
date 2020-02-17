import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LOCALE_ID} from '@angular/core';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { WelcomeComponent } from './home/welcome.component';
import {RouterModule} from '@angular/router';
import { PagenotfoundComponent } from './home/pagenotfound.component';
import { ProductModule } from './product-list/product.module';
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
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', component: PagenotfoundComponent }
    ])
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
