import { Component, OnInit } from '@angular/core'
import {ContactService } from './contact.service'
import {Contact} from '../model/contact.model'

@Component({
    selector :'contact-list',
    templateUrl:'contactList.component.html',
    providers:[ContactService]
})
export class contactListComponent implements OnInit
{
     searchTerm: string ="";
  
  
    contacts : Contact[];
    constructor(private _contactService: ContactService) {
        
       }
     
    ngOnInit() {
        this._contactService.getContact().subscribe(
            (data)=>this.contacts=data,
            (err:any)=> console.log(err)
          );
       }
       
       FilterContacts(){
    this._contactService.getFilteredContact(this.searchTerm).subscribe(
        (data)=>this.contacts=data,
        (err:any)=> console.log(err)
      );
  }
}