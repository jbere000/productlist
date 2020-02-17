import { Component, OnInit } from '@angular/core';
import {IProduct} from './product';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  product: IProduct;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.product = {
            productId: id,
            productName: 'Martillo',
            productCode: 'X-42325',
            releaseDate: '1 Marzo',
            description: 'Martillo',
            price: 3.20,
            starRating: 3.6,
            imageUrl: 'assets/images/martillo.png'
          };
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}
