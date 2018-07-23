import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import { AddContactComponent } from './contact/add-contact/add-contact.component';
import { ContactDetailComponent } from './contact/contact-detail/contact-detail.component';
import { ContactEditComponent } from './contact/contact-edit/contact-edit.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'contactList', component: ContactListComponent },
  {path: 'contactList/:id', component: ContactDetailComponent},
  { path: 'addContact', component: AddContactComponent },
  { path: 'contactList/:id/edit', component: ContactEditComponent},
  { path: '**', redirectTo: 'home'}


];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
