import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  constructor(private home: HomeService, private route: Router) { }
  Items: any[] = [];

  ngOnInit(): void {
    this.theloai()
  }
  theloai() {
    this.home.getalltheloai().subscribe(
      response => {
        this.Items = response.data;
        console.log(this.Items)
      },
      error => {
        console.error(error);
      }
    )
  }
}
