import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../../services/films.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-filmdetail',
  templateUrl: './filmdetail.component.html',
  styleUrl: './filmdetail.component.scss'
})
export class FilmdetailComponent implements OnInit {
  constructor(private phim: FilmsService, private route: ActivatedRoute, private router: Router) { }

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
