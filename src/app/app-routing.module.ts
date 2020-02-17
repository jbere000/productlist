import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {WelcomeComponent} from './home/welcome.component';
import {PagenotfoundComponent} from './home/pagenotfound.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
    { path: 'welcome', component: WelcomeComponent },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', component: PagenotfoundComponent }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
