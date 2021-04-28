import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import {HomeComponent} from "../app/components/home/home.component";
import {ClimaMetropolitanaComponent} from "../app/components/clima-metropolitana/clima-metropolitana.component";
import {ClimaBioBioComponent} from "../app/components/clima-bio-bio/clima-bio-bio.component";
import {ClimaAraucaniaComponent} from "../app/components/clima-araucania/clima-araucania.component"
import {ModificarClimaComponent} from "../app/components/modificar-clima/modificar-clima.component";

const routes: Routes = [
  {path:"" ,component:HomeComponent},
  {path:"formulario",component:ModificarClimaComponent},
  {path:"clima-metropolitana",component:ClimaMetropolitanaComponent},
  {path:"clima-bio-bio",component:ClimaBioBioComponent},
  {path:"clima-araucania",component:ClimaAraucaniaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
