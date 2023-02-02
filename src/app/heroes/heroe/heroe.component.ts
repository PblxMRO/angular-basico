import { Component } from '@angular/core';
@Component({
    selector:'app-heroe',
    templateUrl: 'heroe.component.html'
})
    

export class HeroeComponent{
    nombre: string ='Batman';
    edad: number = 40;

    get nombreMayusculas(){
        return this.nombre.toUpperCase();
    }

    obtenerNombre():string { return `${this.nombre} ----> ${ this.edad}`}

    cambiarNombre(newname:string):void{
        this.nombre = newname;
    }

    cambiarEdad():void{
        this.edad = 99;
    }
}