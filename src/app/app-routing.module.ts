import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {contactListComponent} from './contacts/contactList.component'
import {ContactDetailsComponent} from './contacts/contactDetails.component'



const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
