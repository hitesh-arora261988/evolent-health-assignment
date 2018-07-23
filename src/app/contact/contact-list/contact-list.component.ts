import { Component, OnInit, OnDestroy } from '@angular/core';
import { Contacts } from '../contact.model';
import { ContactService } from '../contact.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit, OnDestroy {
  contacts: Contacts[];
  subscription: Subscription;

  constructor(private contactService: ContactService) { }

  ngOnInit() {

    this.subscription = this.contactService.contactChanged
      .subscribe(
        (contact: Contacts[]) => {
          this.contacts = contact;
        }
      );
    this.contacts = this.contactService.getContacts();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
