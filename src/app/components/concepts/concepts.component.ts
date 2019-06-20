import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CebComponent } from './ceb/ceb.component';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: []
})
export class ConceptsComponent implements OnInit, AfterViewInit {


  ageList: number[] = [25, 30, 35];

  @ViewChild(CebComponent) cebData;

  constructor() {

    console.log("Inside Constructor");
  }

  ngOnInit() {

    console.log("Inside ngOnInit");
  }
  ngAfterViewInit() {
    console.log("Inside ngAfterViewInInt");
    console.log(this.cebData)
  }

  onLoadedEventHandler(msgFromChild) {
    alert(msgFromChild);
  }



}
