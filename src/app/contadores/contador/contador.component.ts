import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `<h1>{{titulo}}</h1>
    <button (click)= sumar()>+1</button>
    <span> {{numero}} </span>
    <button (click)= restar()>-1</button>
    
    <button (click)= acumular(1)>+1</button>
    <span> {{numero2}} </span>
    <button (click)= acumular(-1)>-1</button>
    <br><br>
    <h3>La base es: <strong>{{base}}</strong></h3>
 
    <button (click)= acumular3(base)>+5</button>
    <span> {{numero3}} </span>
     <button (click)= acumular3(-base)>-5</button>
    
    
    <button (click)= acumular4(true)>+5</button>
     <span> {{numero4}} </span>
     <button (click)= acumular4(false)>-5</button>`
})

export class ContadorComponet{
    titulo: string = 'Componente Uno';
    numero: number =10;
    numero2: number =10;
    numero3: number =10;
    numero4: number =10;
    base: number=5;
  
    sumar( ){
      this.numero +=1;
    }
  
    restar(){
      this.numero -=1;
    }
  
    acumular(valor:number){
      this.numero2 +=valor;
    }
  
    acumular3(valor:number){
      this.numero3 +=valor;
    }
  
    acumular4(aumenta:boolean){
      if(aumenta){
        this.numero4 +=5;
      }else{
        this.numero4 -=5;
      }
      
    }
   

}


