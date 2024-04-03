import { Component, OnInit } from '@angular/core';
import { PhimService } from '../../services/phim.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-phim',
  templateUrl: './phim.component.html',
  styleUrl: './phim.component.scss'
})
export class PhimComponent implements OnInit {
  constructor(private phim: PhimService, private route: ActivatedRoute, private router: Router) { }


  filmid: any = {}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.filmid = params['id'];
      this.phimbyid();
      this.alltapphim();
    })
  }
  phimdata: any = {}
  phimbyid() {
    this.phim.phimbyid(this.filmid).subscribe(
      response => {
        this.phimdata = response.data[0];
        console.log(this.phimdata)
      }
    )
  }
  tapphimdata: any[] = []
  alltapphim() {
    this.phim.tapphimbyid(this.filmid).subscribe(
      response => {
        this.tapphimdata = response.data;
        console.log(this.tapphimdata)
      }
    )
  }
  addlsxem() {
    const data = {
      "idTapPhim": 4,
      "idTk": 1
    }



  }
}
