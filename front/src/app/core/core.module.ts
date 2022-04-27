import { NgModule } from '@angular/core';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../shared/angular-material.module';
import { Erro404Component } from './components/erro404/erro404.component';

@NgModule({
    declarations: [
        NavBarComponent,
        Erro404Component
    ],
    imports: [
        RouterModule.forChild([
          { path: '**', component: Erro404Component }
        ])
        ,
        AngularMaterialModule,
    ],
    exports: [
        NavBarComponent
    ]
})
export class CoreModule {

}
