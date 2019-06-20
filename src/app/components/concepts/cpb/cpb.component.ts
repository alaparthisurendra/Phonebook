import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cpb',
  templateUrl: './cpb.component.html',
  styles: []
})
export class CpbComponent implements OnInit {
//use @input to make myAge as attribute/property.
@Input() myAge:number;

  constructor() { }

  ngOnInit() {
  }

}
