import { Component, OnInit } from '@angular/core'
import {ContactService } from './contact.service'
import {Contact} from '../model/contact.model'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
    selector :'contact-details',
   
    templateUrl:'contactDetails.component.html',
    providers:[ContactService]
})
export class ContactDetailsComponent 
{
    contactDetails : Contact;
    id :number;
    constructor(private _contactService:ContactService,
        private _activatedRoute:ActivatedRoute,private _route:Router){
    
    }

    ngOnInit()
    {
        this.id= this._activatedRoute.snapshot.params['ContactID'];
        this._contactService.getContactByID(this.id).subscribe(
            (data)=>this.contactDetails=data,
            (err:any)=> console.log(err)
          );
    }
    onBackButtonClick():void{
        this._route.navigate(['contact']);
    }


}