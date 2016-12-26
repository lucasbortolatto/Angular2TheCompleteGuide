import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-eventy-binding',
  template: `
    <button (click)="onClicked()"> Click me! </button>
  `,
  styles: []
})
export class EventyBindingComponent {
  @Output() clicked = new EventEmitter<string>();
  onClicked() {
    this.clicked.emit('It works');
  }


}
