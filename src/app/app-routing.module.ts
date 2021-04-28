import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import {HomeComponent} from "../app/components/home/home.component";
import {ModificarClimaComponent} from "../app/components/modificar-clima/modificar-clima.component";

const routes: Routes = [
  {path:"" ,component:HomeComponent},
  {path:"formulario",component:ModificarClimaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
