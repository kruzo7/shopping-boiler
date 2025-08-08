import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="menu">
      <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a>
      <a routerLink="/products" routerLinkActive="active">Products</a>
    </nav>
  `,
  styles: [`
    .menu { display: flex; gap: 1rem; padding: .75rem 1rem; background: #f7f7f7; }
    .active { font-weight: 600; text-decoration: underline; }
  `]
})
export class MenuComponent {}