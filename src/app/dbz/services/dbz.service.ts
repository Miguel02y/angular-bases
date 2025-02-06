import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid} from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {

  characters: Character[] = [{
    id: uuid(),
    name:'Krillin',
    power:1000
  },{
    id: uuid(),
    name:'Goku',
    power:9500
  },{
    id: uuid(),
    name:'Vegeta',
    power: 7500
  }];

  // onNewCharacter( character: Character): void{
  //   this.characters.push(character);
  // }
  addCharacter( character: Character): void{
    const newCharacter: Character = { id: uuid(), ...character}
    this.characters.push(newCharacter);
  }

  //vamos a crear otro metedo para mi nuevo personaje, donde se le va agregar un nuevo operador que es...
  // que lo que dice es que tome todas las propiedades que tiene ese objeto y le agregamos el id

  // onDeleteCharacter( index: number): void{
  //    this.characters.splice(index, 1);
  // }

  deleteCharacterById( id:string) {
    this.characters = this.characters.filter ( character => character.id !== id);
  }
}



