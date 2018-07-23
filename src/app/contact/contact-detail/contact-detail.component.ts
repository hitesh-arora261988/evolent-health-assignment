import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { Contacts } from '../contact.model';
import { ContactService } from '../contact.service';


@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
 id:number;
 contact: Contacts;	
  constructor(private route: ActivatedRoute, private contactService: ContactService, private router: Router) { }

  ngOnInit() {
   this.route.params
      .subscribe(
        (params: Params) => {
          this.id= +params['id'];
          this.contact = this.contactService.viewContact(this.id);
        }
      );
  }

  onEditDetails(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

}
