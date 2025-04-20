import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  counter = 10;
  increment() {
    this.counter++;
  }
  decrement() {
    this.counter--;
  }
  reset() {
    this.counter = 10;
  }

}
