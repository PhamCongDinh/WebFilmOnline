import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { ToolbarModule } from 'primeng/toolbar';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
// import { ButtonModule } from 'primeng/button';
// import { IconFieldModule } from 'primeng/iconfield';
// import { InputIconModule } from 'primeng/inputicon';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  items: MenuItem[] = [];
  constructor(private home: HomeService, private route: Router) { }
  ngOnInit(): void {
    this.theloai();
    this.danhsach();
  }

  onPageChange(event: any) {
    this.page = event.page + 1; // event.page bắt đầu từ 0, nên cần +1
    this.danhsach();
  }
  films: any[] = [];
  totalCount: number = 0;
  page: number = 1;
  pageSize: number = 4; // Số lượng bản ghi trên mỗi trang
  loading: boolean = false;

  danhsach() {
    this.loading = true;
    this.home.getfilmsbypage(this.page, this.pageSize).subscribe(
      response => {
        this.films = response.data;
        this.totalCount = response.totalcount;
        this.loading = false;
      },
      error => {
        console.error(error);
        this.loading = false;
      }
    )

  }
  theloai() {
    this.home.getalltheloai().subscribe(
      response => {
        this.items = response.data.map((item: any) => {
          return { label: item.tenLp };
        });
      },
      error => {
        console.error(error);
      }
    )
  }
}
