import { NgModule } from '@angular/core';
import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponent } from './product-list.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { SharedModule } from '../shared/shared.module';
import { ProductListRoutingModule } from './product-list-routing.module';



@NgModule({
  imports: [
    SharedModule,
    ProductListRoutingModule
  ],
  declarations: [
    ProductDetailComponent,
    ProductListComponent,
    ConvertToSpacesPipe
  ]
})
export class ProductModule { }
