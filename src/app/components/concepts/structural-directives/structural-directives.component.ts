import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styles: []
})
export class StructuralDirectivesComponent implements OnInit {


  isLoggedIn:boolean =true;
  lstOfUsers:string[] = ["punith","kumar"];
  constructor() { }

  ngOnInit() {
  }
  isPremiumUser(){
    return false;
  }
}
