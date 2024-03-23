import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'Application/json' })
}
@Injectable({
  providedIn: 'root'
})



export class PlayphimService {

  private apiurl = "http://localhost:5056/api/Phims";

  constructor(private http: HttpClient) { }

  playphimid(id: any): Observable<any> {
    const url = `${this.apiurl}/playtapphim?id=${id}`;
    return this.http.get(url, httpOptions).pipe();
  }


}
