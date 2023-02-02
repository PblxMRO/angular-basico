import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    //generalmente son componentes
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    //lo que se puede acceder desde otros modulos
    exports:[
        ListadoComponent
    ],
    //usualmente son unicamente módulos
    imports:[
        CommonModule
    ]
})

export class HeroesModule {}