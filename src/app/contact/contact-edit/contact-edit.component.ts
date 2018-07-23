import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ContactService } from '../contact.service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {
 id: number;
 contactForm: FormGroup;	

  constructor(private route: ActivatedRoute,
              private contactService: ContactService,
              private router: Router) {}

  ngOnInit() {
  	this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.initForm();
        }
      );
  }

  private initForm() {
      const contact = this.contactService.getContact(this.id);
      let firstName = contact.firstName;
      let lastName = contact.lastName;
      let email = contact.email;
      let phone = contact.phone;
      let designation = contact.designation;
      let department = contact.department;
      let status = contact.status;
      let city = contact.city;
      let state = contact.state;
      let country = contact.country;

    this.contactForm = new FormGroup({
      'firstName': new FormControl(firstName, Validators.required),
      'lastName': new FormControl(lastName, Validators.required),
      'email': new FormControl(email, [Validators.required,Validators.email]),
      'phone': new FormControl(phone, [Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'designation': new FormControl(designation, Validators.required),
      'department': new FormControl(department, Validators.required),
      'status': new FormControl(status, Validators.required),
      'city': new FormControl(city, Validators.required),
      'state': new FormControl(state, Validators.required),
      'country': new FormControl(country, Validators.required)
    });
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onSubmit() {
  	this.contactService.updateRecipe(this.id, this.contactForm.value);
  	this.onCancel();
  }

}
