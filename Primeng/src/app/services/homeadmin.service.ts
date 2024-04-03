import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeadminService {

  private apiurl = "http://localhost:5056/api/HomeAdmins";
  constructor(private http: HttpClient) { }

  getalltapphim(): Observable<any> {
    const url = `${this.apiurl}/getalltp`;
    return this.http.get(url).pipe();
  }
  tapphimid(id: number): Observable<any> {
    const url = `${this.apiurl}/tapphimbyid?id=${id}`;
    return this.http.get(url).pipe();

  }
  updatetapphim(data: any): Observable<any> {
    const url = `${this.apiurl}/updatetapphim`;
    return this.http.put(url, data).pipe();
  }
}
