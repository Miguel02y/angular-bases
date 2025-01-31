import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }];

  @Output()
  onDelete: EventEmitter<number> = new EventEmitter();


  // onDelete( index: number): void {

  // }

  onDeleteCharacter(index: number): void {
    // TODO: emitir el id del personaje
    console.log({index});
    this.onDelete.emit(index);
  }
}

