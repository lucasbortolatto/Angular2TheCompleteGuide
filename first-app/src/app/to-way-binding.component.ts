import { Component } from '@angular/core';

@Component({
  selector: 'app-to-way-binding',
  template:`
    <input type="text"[(ngModel)]="person.name">
    <input type="text"[(ngModel)]="person.name">
  `
})
export class ToWayBindingComponent {
  person = {
    name: "Luc",
    age: 27

  };
}
