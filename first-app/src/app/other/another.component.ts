import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'firstapp-another',
  template: `
    <p>
      another Works!
    </p>
  `,
  styles: []
})
export class AnotherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
