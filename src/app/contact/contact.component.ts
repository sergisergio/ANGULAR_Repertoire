import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() contactName: string;
  @Input() index: number;
  @Input() id: number;

  constructor() { }

  ngOnInit() {
  }

}
