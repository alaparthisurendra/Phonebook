import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../../services/contact.service'
import { ActivatedRoute } from '@angular/router'
import {IContact} from '../../../interfaces/icontact'
declare var $: any;
@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styles: []
})
export class ContactDetailsComponent implements OnInit {
  contactData: IContact;
  editableContactData: Object;
  contactId: number;
  updateStatus: string;
  constructor(private contactService: ContactService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.contactId = params['id'];
      console.log(this.contactId);
    })
  }

  ngOnInit() {

    //Send data to services
    this.contactService.getContatcsById(this.contactId)
      .subscribe(resp => {
        console.log("resp", resp);

        this.contactData = resp;
        //duplicating object
        this.editableContactData = JSON.parse(JSON.stringify(this.contactData));
      });

  }
  updateData() {
    console.log(this.editableContactData);
    //Send data to services
    this.contactService.update(this.editableContactData)
      .subscribe(resp => {
        console.log("resp", resp);
        this.updateStatus = "Updated Successfully";
        this.contactData = resp;

        //duplicating object
        this.editableContactData = JSON.parse(JSON.stringify(this.contactData));
        setTimeout(()=>{
          $('#exampleModal').modal('hide');
          
        },3000);
      });

      this.updateStatus="";
  }

}
