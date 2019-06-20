import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tb',
  templateUrl: './tb.component.html',
  styles: []
})
export class TbComponent implements OnInit {


  appName:string ="My App";
  constructor() { }

  ngOnInit() {
  }

}
