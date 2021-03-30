import { User } from './user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  _url = '';
  private _http: any;



  constructor(private_http: HttpClient) { }

  enroll(user: User){

  }
}
