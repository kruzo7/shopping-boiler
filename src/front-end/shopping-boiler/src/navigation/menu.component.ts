import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="flex justify-center gap-4 p-3 bg-gray-100 text-xl">
      <a routerLink="/" routerLinkActive="font-semibold underline" [routerLinkActiveOptions]="{ exact: true }">Home</a>
      <a routerLink="/products" routerLinkActive="font-semibold underline">Products</a>
    </nav>
  `,
})
export class MenuComponent {}