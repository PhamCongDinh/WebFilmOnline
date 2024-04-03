import { Component, OnInit } from '@angular/core';
import { HomeadminService } from '../../services/homeadmin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editfilms',
  templateUrl: './editfilms.component.html',
  styleUrl: './editfilms.component.scss'
})
export class EditfilmsComponent implements OnInit {

  constructor(private router: Router, private had: HomeadminService, private route: ActivatedRoute) { }
  tapid: any = {}
  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.tapid = param['id']
      this.detail();
    })
  }
  tapphimdata: any = {};
  detail() {
    this.had.tapphimid(this.tapid).subscribe(
      Response => {
        this.tapphimdata = Response.data[0];
        console.log(this.tapphimdata)
      }
    )

  }
  edit() {
    const data = {
      "id": 5,
      "thoiHan": this.tapphimdata.tp.thoiHan,
      "tapSo": this.tapphimdata.tp.tapSo,
      "thoiGianChieu": this.tapphimdata.tp.thoiGianChieu,
      "thoiLuong": this.tapphimdata.tp.thoiLuong,
      "urlPhim": this.tapphimdata.tp.urlPhim,
      "urlTrailer": this.tapphimdata.tp.urlTrailer,
      "idPhim": 4
    }
    this.had.updatetapphim(data).subscribe(
      Response => {
        alert("Cập nhật thành công")
        this.router.navigate(['/homeadmin'])
      }
    )
  }
}
