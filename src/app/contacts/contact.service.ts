import { Injectable } from '@angular/core'
import { Contact } from '../model/contact.model'
import { Observable, of, throwError } from 'rxjs';
import { delay, catchError } from 'rxjs/operators'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'

@Injectable()
export class ContactService {

  constructor(private httpClient: HttpClient) { }

  baseUrl = 'https://localhost:44339/api/contact';
  getContact(): Observable<Contact[]> {

    return this.httpClient.get<Contact[]>(this.baseUrl)
      .pipe(catchError(this.handleError));
  }
  
  getFilteredContact(searchText: string): Observable<Contact[]> {
    return this.httpClient.get<Contact[]>(`${this.baseUrl}/filtered/${searchText}`).pipe(catchError(this.handleError));
  }
  getContactByID(searchText: number): Observable<Contact> {
    return this.httpClient.get<Contact>(`${this.baseUrl}/find/${searchText}`).pipe(catchError(this.handleError));
  }
  handleError(errorResponse: HttpErrorResponse) {
    
      console.log(errorResponse.error);
    
    return throwError('There is a problem with the service. We are notified and working on it. Please try again later');
  }

}