import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.css']
})
export class ContactViewComponent implements OnInit, OnDestroy {

  contacts: any[];
  //@Input() contactName: string;
  //@Input() index: number;
  //@Input() id: number;
  contactSubscription: Subscription;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactSubscription = this.contactService.contactsSubject.subscribe(
      (contacts: any[]) => {
        this.contacts = contacts;
      }
    );
    this.contactService.emitContactSubject();
  }

  ngOnDestroy() {
    this.contactSubscription.unsubscribe();
  }
}
