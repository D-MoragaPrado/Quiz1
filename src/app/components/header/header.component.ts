import { Component, OnInit } from '@angular/core';
import { Directive } from '@angular/core';
import {HomeComponent} from "../home/home.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
