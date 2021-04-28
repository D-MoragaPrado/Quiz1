import { Component, OnInit } from '@angular/core';
import{ ClimaDia,ListaDias} from "../../interface/LaDBio";

@Component({
  selector: 'app-clima-bio-bio',
  templateUrl: './clima-bio-bio.component.html',
  styleUrls: ['./clima-bio-bio.component.scss']
})
export class ClimaBioBioComponent implements OnInit {
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
      this.normal1 = !this.normal1;
      this.normal2 = !this.normal2;
    }
  }
  toggle2() {
    if(this.show1){
      this.show2 = !this.show2;
      this.show1 = !this.show1;
      this.normal2 = !this.normal2;
      this.normal1 = !this.normal1;
    }
  }
}
