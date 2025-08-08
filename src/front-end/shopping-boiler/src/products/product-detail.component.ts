import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService, Product } from './product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="p-4 max-w-md mx-auto bg-white rounded shadow">
      <h2 class="text-xl font-bold mb-4">{{isNew ? 'Add New Product' : 'Edit Product'}}</h2>
      <form (ngSubmit)="save()">
        <div class="mb-2">
          <label>Code</label>
          <input class="border p-2 w-full" [(ngModel)]="product.code" name="code" required />
        </div>
        <div class="mb-2">
          <label>Name</label>
          <input class="border p-2 w-full" [(ngModel)]="product.name" name="name" required />
        </div>
        <div class="mb-2">
          <label>Price Value</label>
          <input type="number" class="border p-2 w-full" [(ngModel)]="product.price.value" name="value" required />
        </div>
        <div class="mb-2">
          <label>Currency</label>
          <input class="border p-2 w-full" [(ngModel)]="product.price.currency" name="currency" required />
        </div>
        <button class="bg-blue-500 text-white px-4 py-2 rounded mr-2" type="submit">Save</button>
        <a routerLink="/products" class="bg-gray-400 text-white px-4 py-2 rounded">Close</a>
      </form>
    </div>
  `
})
export class ProductDetailComponent implements OnInit {
  product: Product = { code: '', name: '', price: { value: 0, currency: 'USD' } };
  isNew = false;
  constructor(
    private service: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id === 'new') {
      this.isNew = true;
    } else if (id) {
      this.service.getById(+id).subscribe(p => this.product = p);
    }
  }
  save() {
    if (this.isNew) {
      this.service.add(this.product).subscribe(() => this.router.navigate(['/products']));
    } else {
      // Implement update if needed
      this.router.navigate(['/products']);
    }
  }
}