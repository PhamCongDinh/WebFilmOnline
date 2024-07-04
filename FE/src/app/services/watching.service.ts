import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WatchingService {

  private apiurl = "http://localhost:5056/api/Phims";

  constructor(private http: HttpClient) { }

  playphimid(id: any): Observable<any> {
    const url = `${this.apiurl}/playtapphim?id=${id}`;
    return this.http.get(url).pipe();
  }

  lichsuxem(data: any): Observable<any> {
    const url = "http://localhost:5056/api/LichSuXems/addlichsu";
    return this.http.post(url, data).pipe();
  }
}
