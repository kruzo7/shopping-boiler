import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService, Product } from '../services/product.service';

@Component({
    selector: 'app-product-list',
    standalone: true,
    imports: [CommonModule, RouterLink],
    template: `
    <div class="p-4">
      <h1 class="text-2xl font-bold mb-4">Products</h1>
      <a routerLink="/products/new" class="bg-blue-500 text-white px-4 py-2 rounded mb-4 inline-block">Add New</a>
      <table class="min-w-full bg-white">
        <thead>
          <tr>
            <th class="py-2">ID</th>
            <th>Code</th>
            <th>Name</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
            @for (p of products; track p.id) {
                <tr>
                    <td class="py-2">{{p.id}}</td>
                    <td>{{p.code}}</td>
                    <td>{{p.name}}</td>
                    <td>{{p.price.value}} {{p.price.currency}}</td>
                    <td>
                    <a [routerLink]="['/products', p.id]" class="bg-green-500 text-white px-2 py-1 rounded">Edit This</a>
                    </td>
                </tr>
            }
        </tbody>
      </table>
    </div>
  `
})
export class ProductListComponent implements OnInit {
    products: Product[] = [];
    constructor(private service: ProductService) { }
    ngOnInit() {
        this.service.getAll().subscribe(data => this.products = data);
    }
}