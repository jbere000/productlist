import { Component } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
@Component({
  selector: 'app-root',
  template: `
  <nav class='navbar navbar-expanded navbar-light bg-light'>
    <a class= 'navbar-brand'>{{title}}</a>
  <ul class = 'nav nav-pills'>
    <li><a class='nav-link' [routerLink]="['/welcome']">Home</a><li>
    <li><a class='nav-link' [routerLink]="['/products']">Product List</a><li>
  </ul>
</nav>
  <router-outlet></router-outlet>
    `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ProductList';
}
