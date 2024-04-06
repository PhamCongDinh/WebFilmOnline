import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeadminService {

  private apiurl = "http://localhost:5056/api/HomeAdmins";
  private token = localStorage.getItem('token');
  private header = new HttpHeaders().set(
    "Authorization", `Bearer ${this.token}`
  );
  constructor(private http: HttpClient) { }
  getalltapphim(): Observable<any> {
    const url = `${this.apiurl}/getalltp`;
    return this.http.get(url, { headers: this.header });
  }
  tapphimid(id: number): Observable<any> {
    const url = `${this.apiurl}/tapphimbyid?id=${id}`;
    return this.http.get(url, { headers: this.header }).pipe(

      catchError(err => {
        throw 'error in source. Details: ' + err;
      }));

  }
  updatetapphim(data: any): Observable<any> {
    const url = `${this.apiurl}/updatetapphim`;
    return this.http.put(url, data, { headers: this.header }).pipe(
    );
  }



  // getalltapphim(): Observable<any> {
  //   const token = localStorage.getItem('token');

  //   // Kiểm tra xem token có tồn tại không
  //   if (token) {
  //     const header = new HttpHeaders().set("Authorization", `Bearer ${token}`);
  //     const url = `${this.apiurl}/getalltp`;
  //     return this.http.get(url, { headers: header });
  //   } else {
  //     // Xử lý trường hợp token không tồn tại
  //     // Ví dụ: redirect người dùng đến trang đăng nhập
  //     console.error("Token không tồn tại");
  //     // Do something...
  //   }
}
