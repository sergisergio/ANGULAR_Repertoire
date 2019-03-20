import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { ContactService } from './services/contact.service';
import { ContactViewComponent } from './contact/contact-view/contact-view.component';
import { Routes, RouterModule } from '@angular/router';
import { SingleContactComponent } from './contact/single-contact/single-contact.component';
import { AddContactComponent } from './contact/add-contact/add-contact.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';

const appRoutes: Routes = [
  { path: 'contacts', component: ContactViewComponent },
  { path: '', component: ContactViewComponent },
  { path: 'contacts/:id', component: SingleContactComponent },
  { path: 'add', component: AddContactComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HeaderComponent,
    ContactViewComponent,
    SingleContactComponent,
    AddContactComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
