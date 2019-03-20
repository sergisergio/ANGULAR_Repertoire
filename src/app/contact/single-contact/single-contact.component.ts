import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-single-contact',
  templateUrl: './single-contact.component.html',
  styleUrls: ['./single-contact.component.css']
})
export class SingleContactComponent implements OnInit {

  name: string;
  address: string;
  phone: string;
  email: string;

  constructor(private contactService: ContactService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.name = this.contactService.getContactById(+id).name;
    this.address = this.contactService.getContactById(+id).address;
    this.phone = this.contactService.getContactById(+id).phone;
    this.email = this.contactService.getContactById(+id).email;
  }

}
