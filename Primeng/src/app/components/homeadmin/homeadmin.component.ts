import { Component, OnInit } from '@angular/core';
import { HomeadminService } from '../../services/homeadmin.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-homeadmin',
  templateUrl: './homeadmin.component.html',
  styleUrl: './homeadmin.component.scss'
})
export class HomeadminComponent implements OnInit {

  constructor(private route: Router, private tp: HomeadminService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    var token = localStorage.getItem('token');

    this.getalltp();
  }


  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  urlPhimSafe: SafeResourceUrl = {};
  phim!: any[];

  getalltp() {
    this.tp.getalltapphim().subscribe(
      response => {
        this.phim = response.data;
        console.log(this.phim);
      }
    );
  }

}
