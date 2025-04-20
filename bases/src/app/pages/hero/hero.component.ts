import { UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'

})
export class HeroComponent {
  name1: string = 'Ironman'
  age1: number = 45
  name = signal('Ironman');
  age = signal(45);

  getHeroDescription(): string {
    return `${this.name()} is ${this.age()} years old`;
  }

  changeHero(): void {
    this.name.set('Spiderman');
    this.age.set(25);
  }
  editAge(): void {
    this.age.set(60);
  }
  resetForm(): void {
    this.name.set(this.name1);
    this.age.set(this.age1);
  }
}
