import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
  <H3>Counter: {{counter}} </H3>

<button (click)="increaseBy(+1)">+1</button>
<button (click)="reset()">Reset</button>
<button  (click)="increaseBy(-1)">-1</button>

  `
})
export class counterComponent {
  counter: number = 10;

  increaseBy( value: number): void{
    this.counter += value;
  }

  reset( value: number = 10): void {
    this.counter = value;
  }

}
