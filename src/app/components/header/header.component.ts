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

  constructor() { }

  ngOnInit(): void {
  }
  toggle1() { 
    this.valpo = true;
    this.santiago = false;
    this.biobio = false;
    this.araucania= false;
  }
  toggle2() {
    this.valpo = false;
    this.santiago = true;
    this.biobio = false;
    this.araucania= false;
  }
  toggle3() {
    this.valpo = false;
    this.santiago = false;
    this.biobio = true;
    this.araucania= false;
  }
  toggle4() {
    this.valpo = false;
    this.santiago = false;
    this.biobio = false; 
    this.araucania= true;
  }


}
