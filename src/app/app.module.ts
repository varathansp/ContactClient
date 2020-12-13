import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule,Routes} from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {contactListComponent} from './contacts/contactList.component'
import {ContactDetailsComponent} from './contacts/contactDetails.component'
import { from } from 'rxjs';

const appRoutes:Routes=[
   {path:'contact',component:contactListComponent},
  {path:'contact/:ContactID',component:ContactDetailsComponent},
  {path:'', redirectTo:'/contact',pathMatch:'full'},
  // {path:'**',component:PageNotFoundComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,contactListComponent,ContactDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
