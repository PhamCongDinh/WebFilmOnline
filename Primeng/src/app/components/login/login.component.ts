import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private auth: AuthService, private route: Router) { }

  login(formdata: any) {
    if (formdata.valid) {
      const data = {
        "email": formdata.value.email,
        "matkhau": formdata.value.matkhau
      };
      this.auth.login(data).subscribe(
        Response => {
          alert("Đăng nhập thành công");

          console.log(Response.token);
          localStorage.setItem("token", Response.token);
          this.route.navigate(['homeadmin']);
        },
        error => {
          alert("đăng nhập thất bại");
        }
      )
    }
  }
}
