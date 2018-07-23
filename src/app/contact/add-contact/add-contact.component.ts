import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from '../contact.service';
@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
   status:string='active';

  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }

  onAddContact(form: NgForm){
  	console.log(form.value);
    this.contactService.addContact(form.value);
    form.reset();
  }

}
