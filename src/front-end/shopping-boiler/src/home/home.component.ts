import { Component } from '@angular/core';

@Component({  
  standalone: true,
  imports: [],
  template: `
    <section>
      <h2>Home</h2>
      <div style="display:flex; gap: .75rem;">
        Hello World :)
      </div>
    </section>
  `
})
export class HomeComponent {
}