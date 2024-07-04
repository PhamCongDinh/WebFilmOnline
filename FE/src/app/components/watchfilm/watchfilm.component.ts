import { Component, OnInit } from '@angular/core';
import { WatchingService } from '../../services/watching.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-watchfilm',
  templateUrl: './watchfilm.component.html',
  styleUrl: './watchfilm.component.scss'
})
export class WatchfilmComponent implements OnInit {
  constructor(private play: WatchingService, private route: ActivatedRoute, private sanitizer: DomSanitizer) { }
  tapid: any = {};
  playphimdata: any = {};
  urlPhimSafe: SafeResourceUrl = {};



  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.tapid = params['id'];
      this.playtapphim();
      this.watchMovie();
      // this.lichsuxem();
    });
  }


  watchMovie() {
    setTimeout(() => {
      this.lichsuxem();
    }, 1 * 60 * 1000);
  }

  lichsuxem() {
    const data = {
      "idTapPhim": this.tapid,
      "idTk": 1
    }
    this.play.lichsuxem(data).subscribe(
      Response => {
        console.log(data);
      }
    )
  }




  playtapphim() {
    this.play.playphimid(this.tapid).subscribe(
      response => {
        this.playphimdata = response.data[0];
        console.log(this.playphimdata);
        // Sanitize the URL
        this.urlPhimSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.playphimdata?.tap?.urlPhim);
      }
    );
  }
}
