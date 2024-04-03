import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-newtapphim',
  templateUrl: './newtapphim.component.html',
  styleUrl: './newtapphim.component.scss'
})
export class NewtapphimComponent implements OnInit {
  form!: FormGroup;
  constructor(private ntp: AdminService, private fg: FormBuilder) { }
  ngOnInit(): void {
  }

  addEpisode() {
    const episodesContainer = document.getElementById('episodesContainer');
    const episodeTemplate = document.getElementById('episode') as HTMLElement;

    if (episodesContainer && episodeTemplate) {
      const newEpisode = episodeTemplate.cloneNode(true) as HTMLElement;

      const inputFields = newEpisode.querySelectorAll('input, select');
      inputFields.forEach((input: any) => {
        input.value = '';
      });
      episodesContainer.appendChild(newEpisode);

    }
  }

  submitForm() {
    // Khởi tạo FormGroup nếu chưa tồn tại
    if (!this.form) {
      this.form = this.fg.group({
        phimDatas: this.fg.array([])
      });
    }

    // Lấy mảng phimDatas từ FormGroup
    const phimDatas = this.form.get('phimDatas') as FormArray;

    // Lấy tất cả các phần tử episode từ episodesContainer
    const episodesContainer = document.getElementById('episodesContainer');
    const episodes = episodesContainer?.querySelectorAll('#episode');

    // Lặp qua mỗi episode để thêm vào mảng phimDatas
    if (episodes) {
      episodes.forEach((episode: any) => {
        phimDatas.push(this.fg.group({
          tenPhim: episode.querySelector('#tenPhim').value,
          tapSo: episode.querySelector('#tapSo').value,
          thoiGianChieu: episode.querySelector('#thoiGianChieu').value,
          thoiHan: episode.querySelector('#thoiHan').value,
          thoiLuong: episode.querySelector('#thoiLuong').value,
          url_trailer: episode.querySelector('#url_trailer').value,
          url_tapphim: episode.querySelector('#url_tapphim').value,
          gia: episode.querySelector('#gia').value
        }));
      });
    }
    // console.log(this.form.value);

    // Log dữ liệu đã nhập

    this.ntp.newtapphim(this.form.value).subscribe(
      Response => {
        console.log(this.form.value);
        alert("Thêm thành công")

      },
      Error => {
        console.log("error")
      }

    )
  }




}
