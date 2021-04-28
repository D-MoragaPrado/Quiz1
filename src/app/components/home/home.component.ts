import { Component, OnInit } from '@angular/core';
import{ ClimaDia,ListaDias} from "../../interface/LaD";
let b1:any=document.getElementById("Celsius");

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  //@Input() inicial: number;
  Semana=ListaDias;
  public show1:boolean = true;
  public show2:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  toggle1() {
    if(this.show2){
      this.show1 = !this.show1;
      this.show2 = !this.show2;
      b1.style.Color= "red";
    }
  }
  toggle2() {
    if(this.show1){
      this.show2 = !this.show2;
      this.show1 = !this.show1;
    }

  }


}
