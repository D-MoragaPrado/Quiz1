import { Component, OnInit } from '@angular/core';
import { Directive } from '@angular/core';
import {HomeComponent} from "../home/home.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  
})
export class HeaderComponent implements OnInit {
  public valpo:boolean = true;
  public santiago:boolean = false;
  public biobio:boolean = false;
  public araucania:boolean = false;
  normal1:boolean=true;
  normal2:boolean=false;
  normal3:boolean=false;
  normal4:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
  toggle1() { 
    //nombre al costado
    this.valpo = true;
    this.santiago = false;
    this.biobio = false;
    this.araucania = false;
    //colores
    this.normal1 = true;
    this.normal2 = false;
    this.normal3 = false;
    this.normal4 = false;
  }
  toggle2() {
    //nombre al costado
    this.valpo = false;
    this.santiago = true;
    this.biobio = false;
    this.araucania= false;
    //colores
    this.normal1 = false;
    this.normal2 = true;
    this.normal3 = false;
    this.normal4 = false;
  }
  toggle3() {
    //nombre al costado
    this.valpo = false;
    this.santiago = false;
    this.biobio = true;
    this.araucania= false;
    //colores
    this.normal1 = false;
    this.normal2 = false;
    this.normal3 = true;
    this.normal4 = false;
  }
  toggle4() {
    //nombre al costado
    this.valpo = false;
    this.santiago = false;
    this.biobio = false; 
    this.araucania= true;
    //colores
    this.normal1 = false;
    this.normal2 = false;
    this.normal3 = false;
    this.normal4 = true;
  } 


}
