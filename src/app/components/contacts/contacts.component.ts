import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service'
import {IContact} from '../../interfaces/icontact'
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styles: []
})
export class ContactsComponent implements OnInit {
  contactList: IContact[];
  constructor(private contactService: ContactService) { }

  ngOnInit() {

    //Send data to services
    this.contactService.getContacts()
      .subscribe(resp => {
        console.log("resp", resp);
        if (resp && resp.length > 0)
          this.contactList = resp;
      });

  }

  ngOnDestroy(){
    console.log("inside ngOnDestroy");
  }
}
