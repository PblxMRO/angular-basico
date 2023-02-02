import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  constructor(){
    console.log('constructor');
  }

  eliminado:string='';

 heroes: string[]=['Batman', 'Superman', 'Thor', 'Hulk', 'Spiderman' ];

 borrarHeroe():void{
   // this.heroes.splice(id, 1);
 //const heroeBorrado = this.heroes.shift();
 //if(heroeBorrado != undefined){
 // this.eliminado = heroeBorrado;
 //}
 this.eliminado = this.heroes.shift() || '';
 
 }

  
}
