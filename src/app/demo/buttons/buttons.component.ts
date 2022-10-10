import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  template: `
    <button mat-button color="primary">
      <mat-icon fontIcon="face">face</mat-icon>

      Primary</button>

    <br> <br>
    <mat-checkbox >Check me!</mat-checkbox>

  `,
  styles: [
  ]
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
