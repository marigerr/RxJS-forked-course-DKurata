import { Component, ChangeDetectionStrategy } from '@angular/core';

import { EMPTY, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  pageTitle = 'Product List';
  errorMessage = '';
  categories;

  // products$ = this.productService.products$
  products$ = this.productService.productsWithCategory$
    .pipe(
      catchError(err => { 
        tap(products => console.table(products)),
        this.errorMessage = err;
        // return of([])
        return EMPTY;
      })
  );

  constructor(private productService: ProductService) { }

  onAdd(): void {
    console.log('Not yet implemented');
  }

  onSelected(categoryId: string): void {
    console.log('Not yet implemented');
  }
}
