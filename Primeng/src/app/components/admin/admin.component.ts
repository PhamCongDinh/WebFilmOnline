import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit {
  constructor(private ad: AdminService) { }
  ngOnInit(): void {
  }
  displayImage(fileInput: any) {
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = (e: any) => {
      const imageDisplay = document.getElementById('imageDisplay');
      if (imageDisplay)
        imageDisplay.innerHTML = '<img src="' + e.target.result + '" style="max-width:300px; max-height:300px;" />';
    };

    reader.readAsDataURL(file);
  }


  newphim() {
    const data = document.getElementById('myForm') as HTMLFormElement;
    const formdata = new FormData(data);
    this.ad.newphim(formdata).subscribe(
      (response) => {
        console.log(response);
        // Xử lý phản hồi từ server nếu cần
      },
      (error) => {
        console.error(error);
        // Xử lý lỗi nếu cần
      }
    )

  }
}

