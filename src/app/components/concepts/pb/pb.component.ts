import { Component, OnInit } from '@angular/core';
//Property Binding
@Component({
  selector: 'app-pb',
  templateUrl: './pb.component.html',
  styles: [
  ]
})
export class PbComponent implements OnInit {

appNmae:string ="Phone Book";
developer:string ="Punith";
isLoggedIn:Boolean = false;

  constructor() { }

  ngOnInit() {
  }
  getLoggedInStatus(){

    return this.isLoggedIn;
  }
}
