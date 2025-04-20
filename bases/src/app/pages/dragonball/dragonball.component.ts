import { Component, signal } from '@angular/core';
interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball',
  standalone: true,
  imports: [],
  templateUrl: './dragonball.component.html',
  styleUrl: './dragonball.component.css'
})
export class DragonballComponent {
  name = signal('');
  power = signal(0);
  characters = signal([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8500 },
    { id: 3, name: 'Gohan', power: 7000 },
    { id: 4, name: 'Piccolo', power: 6000 },
    { id: 5, name: 'Krillin', power: 5000 },
  ]);

  agregarPerson() {
    /*   if (!this.name() || this.power() >= 0) {
        return;
      } */
    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };
    this.characters.update((prev) => [...prev, newCharacter]);
    this.name.set('');
    this.power.set(0);
  }
}
