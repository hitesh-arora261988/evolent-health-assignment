import { Injectable } from '@angular/core';
import { Contacts } from './contact.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class ContactService{
	constructor(private router: Router){}	
	contactChanged = new Subject<Contacts[]>();	

	private contacts: Contacts[] =[
	 new Contacts(
	 	 'Hitesh',
	 	 'Arora',
	 	 'hitesh.arora@gmail.com',
	 	 2406606057,
	 	 'active',
	 	 'Consultant',
	 	 'Rockville',
	 	 'USA',
	 	 'Cardiology',
	 	 'MD'
	 	),
	 new Contacts(
	 	 'Neha',
	 	 'Malhotra',
	 	 'neha.malhotra@gmail.com',
	 	  2406606057,
	 	 'active',
	 	 'Consultant',
	 	 'Rockville',
	 	 'USA',
	 	 'Cardiology',
	 	 'MD'
	 	),
	 	new Contacts(
	 	 'Sunny',
	 	 'Yo',
	 	 'sunny.yo@gmail.com',
	 	  2456765412,
	 	 'inactive',
	 	 'Consultant',
	 	 'Atlanta',
	 	 'USA',
	 	 'Cardiology',
	 	 'GA'
	 	)

	]

	getContacts(){
	  return this.contacts.slice();
	}

	addContact(contact: Contacts){
		this.contacts.push(contact);
		alert("New contact has been added");
		this.router.navigate(['/']);
	}

	removeContact(index:number){
	 var delContact = confirm("Are you sure you want to delete this profile??");
	if (delContact) {
		this.contacts.splice(index, 1);
        this.contactChanged.next(this.contacts.slice());
        alert("Contact has been removed");
     }	
      
	}

	viewContact(index:number){
       return this.contacts[index];
	}

	getContact(index: number){
	  return this.contacts[index];
	}

   updateRecipe(index: number, newContact: Contacts) {
    this.contacts[index] = newContact;
    this.contactChanged.next(this.contacts.slice());
  }


}