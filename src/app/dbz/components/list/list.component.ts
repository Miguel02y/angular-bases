import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

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
  onDelete: EventEmitter<string> = new EventEmitter();


  // onDelete( index: number): void {

  // }

  onDeleteCharacter( id?: string): void {
    // TODO: emitir el id del personaje
    // console.log({index});
    if ( !id ) return;
    this.onDelete.emit(id);
  }
}

