import { Component, OnInit } from '@angular/core';
import{ ClimaDia,ListaDias} from "../../interface/LaDAraucania";

@Component({
  selector: 'app-clima-araucania',
  templateUrl: './clima-araucania.component.html',
  styleUrls: ['./clima-araucania.component.scss']
})
export class ClimaAraucaniaComponent implements OnInit {
  Semana=ListaDias;
  public show1:boolean = true;
  public show2:boolean = false;
  normal1:boolean = true;
  normal2:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle1() {
    if(this.show2){
      this.show1 = !this.show1;
      this.show2 = !this.show2;
      this.normal1=!this.normal1;
      this.normal2=!this.normal2;
    }
  }
  toggle2() {
    if(this.show1){
      this.show2 = !this.show2;
      this.show1 = !this.show1;
      this.normal2=!this.normal2;
      this.normal1=!this.normal1;
    }
  }
}
