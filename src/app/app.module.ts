import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ModificarClimaComponent } from './components/modificar-clima/modificar-clima.component';
import { FooterComponent } from './components/footer/footer.component';
import { ClimaMetropolitanaComponent } from './components/clima-metropolitana/clima-metropolitana.component';
import { ClimaBioBioComponent } from './components/clima-bio-bio/clima-bio-bio.component';
import { ClimaAraucaniaComponent } from './components/clima-araucania/clima-araucania.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ModificarClimaComponent,
    FooterComponent,
    ClimaMetropolitanaComponent,
    ClimaBioBioComponent,
    ClimaAraucaniaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
