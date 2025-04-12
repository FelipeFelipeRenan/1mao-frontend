import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet> <!-- Este é o local onde as rotas serão exibidas -->
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'your-app-name';
}
