import { Component, OnInit, Input } from '@angular/core';
import { Contacts } from '../../contact.model';
import { ContactService } from '../../contact.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent implements OnInit {

@Input() contact: Contacts;
@Input() index: number;


  constructor(private contactService: ContactService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  deleteContact(index:number){
    this.contactService.removeContact(index)
  }

  viewContactDetail(index:number){
     this.router.navigate([index], {relativeTo: this.route});
  }

}
