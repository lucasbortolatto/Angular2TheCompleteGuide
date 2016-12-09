import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <h1>Inline Template</h1>
      <firstapp-other></firstapp-other>
      <firstapp-another>
        <div>
            <h2>Hello</h2>
            <p>World</p>
        </div>
      </firstapp-another>
  `,
  styles: [`
    h1 {
        color: red;
    }
    `]
})
export class AppComponent {
  title = 'app works!';
}
