import { Component } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
@Component({
  selector: 'app-root',
  template:
  `
  <div>
  <h1>{{title}}</h1>
  <app-product-list></app-product-list>
  </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ProductList';
}
