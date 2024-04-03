import { Component, OnInit } from '@angular/core';
import { PlayphimService } from '../../services/playphim.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DanhgiaService } from '../../services/danhgia.service';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-playphim',
  templateUrl: './playphim.component.html',
  styleUrl: './playphim.component.scss'
})

export class PlayphimComponent implements OnInit {

  constructor(private cmmt: CommentService, private dg: DanhgiaService, private play: PlayphimService, private route: ActivatedRoute, private sanitizer: DomSanitizer) { }
  tapid: any = {};
  playphimdata: any = {};
  urlPhimSafe: SafeResourceUrl = {};



  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.tapid = params['id'];
      this.playtapphim();
      this.getallcmmt();
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
  rateStar(event: MouseEvent) {
    const star = event.target as HTMLElement;
    const stars = document.querySelectorAll('.pi');

    let clickedStarIndex = Array.from(stars).indexOf(star);
    console.log(clickedStarIndex)
    // Loại bỏ tất cả các lớp 'pi-star-fill' và thêm 'pi-star' cho tất cả các ngôi sao
    stars.forEach((s, index) => {
      if (index <= clickedStarIndex) {
        s.classList.remove('pi-star');
        s.classList.add('pi-star-fill');
      } else {
        s.classList.remove('pi-star-fill');
        s.classList.add('pi-star');
      }
    });
    const data = {
      "SoDiem": clickedStarIndex + 1,
      "IdTapPhim": this.tapid,
      "IdTk": 1
    }
    this.dg.danhgia(data).subscribe(
      (response: any) => {
        if (response.message === "success") {
          alert("cảm ơn bạn đã đánh giá")
        }
      }
    )
  }
  cmmtdata: any[] = []
  getallcmmt() {
    this.cmmt.getallcmmt(this.tapid).subscribe(
      response => {
        this.cmmtdata = response.data;
        console.log(this.cmmtdata);
      }
    )


  }
  nd: any = ""
  addcmmt() {
    const data = {
      "NoiDung": this.nd,
      "IdTapPhim": this.tapid,
      "IdTk": 1
    }
    this.cmmt.addcmmt(data).subscribe(
      (response: any) => {
        if (response.message === "success") {
          alert("bình luận thành công")
          this.nd = ""
          this.getallcmmt();
        }
      }
    )
  }


  value: any;

  test() {
    if (this.value != null) {
      const data = {
        "SoDiem": this.value,
        "IdTapPhim": this.tapid,
        "IdTk": 1
      }
      this.dg.danhgia(data).subscribe(
        (response: any) => {
          if (response.message === "success") {
            alert("cảm ơn bạn đã đánh giá:")
          }
        }
      )
    }
    else {
      return;
    }

  }

}
