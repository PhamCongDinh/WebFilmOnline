import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'Application/json' })
}
@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }
  getallcmmt(id: any): Observable<any> {
    const url = `http://localhost:5056/api/Comments/getallcmmt?req=${id}`;
    return this.http.get(url, httpOptions).pipe();
  }
  addcmmt(data: any): Observable<any> {
    const url = "http://localhost:5056/api/Comments/addcmmt";
    return this.http.post(url, data).pipe();
  }
}
