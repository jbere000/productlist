import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {LOCALE_ID} from '@angular/core';
import { IProduct } from './product';
import {ProductService} from './product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  pageTitle = 'Product List';
  showImage = false;
  // tslint:disable-next-line: variable-name
  _listFilter: string;
  products: IProduct[];
  filteredProducts: IProduct[];
  errorMessage: string;
  // tslint:disable-next-line: variable-name
  constructor(private productService: ProductService) {
  }
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this._listFilter) : this.products;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products; },
      error(err) { this.errorMessage = err; }
    });

  }
  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }

}
