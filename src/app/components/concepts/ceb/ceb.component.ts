import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-ceb',
  templateUrl: './ceb.component.html',
  styles: []
})
  export class CebComponent implements OnInit {
 //step 1
  @Output() profileLoaded = new EventEmitter<string>();

  constructor() { 
  }
  ngOnInit() {
    
  }

  loadMyData(){
   //step 2
  this.profileLoaded.emit("Punith")
  }


}
