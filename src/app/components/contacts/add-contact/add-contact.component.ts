import { Component, OnInit } from '@angular/core';
import {ContactService} from '../../../services/contact.service'

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styles: []
})
export class AddContactComponent implements OnInit {

contactData:Object = {
  username:"",
  email:"",
  phone:""
}
submissionStatus:string="";
  constructor(private contactService:ContactService) { }

  ngOnInit() {

    
  }

  onSubmitHandler(formdata){
    console.log(formdata);

    //Send data to services
    this.contactService.create(formdata.value)
    .subscribe( resp => {
      //console.log("resp", resp)
      //if-else  to check message status
      this.submissionStatus="Thanks!Saved";
      //alert("yes am done!!")
    });

  }
}
