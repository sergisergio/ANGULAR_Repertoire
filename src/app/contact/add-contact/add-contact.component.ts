import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService} from '../../services/contact.service';


@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  constructor(private contactService: ContactService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    const name = form.value['name'];
    const address = form.value['address'];
    const phone = form.value['phone'];
    const email = form.value['email'];
    this.contactService.addContact(name, address, phone, email);
    this.router.navigate(['/contacts']);
  }

}
