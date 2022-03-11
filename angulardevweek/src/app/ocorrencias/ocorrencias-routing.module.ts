import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OcorrenciasComponent } from './ocorrencias/ocorrencias.component';

const routes: Routes = [
  { //importando o OcorrenciasCompoent q esta dentro do components
    path:'', component: OcorrenciasComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OcorrenciasRoutingModule { }
