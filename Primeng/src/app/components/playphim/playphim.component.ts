import { Component, OnInit } from '@angular/core';
import { PlayphimService } from '../../services/playphim.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-playphim',
  templateUrl: './playphim.component.html',
  styleUrl: './playphim.component.scss'
})

export class PlayphimComponent implements OnInit {
  constructor(private play: PlayphimService, private route: ActivatedRoute, private sanitizer: DomSanitizer) { }
  tapid: any = {};
  playphimdata: any = {};
  urlPhimSafe: SafeResourceUrl = {};

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.tapid = params['id'];
      this.playtapphim();
    });
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
