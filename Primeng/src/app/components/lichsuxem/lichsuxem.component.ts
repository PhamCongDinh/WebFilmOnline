import { Component, OnInit } from '@angular/core';
import { LichsuService } from '../../services/lichsu.service';

@Component({
  selector: 'app-lichsuxem',
  templateUrl: './lichsuxem.component.html',
  styleUrl: './lichsuxem.component.scss'
})
export class LichsuxemComponent implements OnInit {

  constructor(private lsx: LichsuService) { }
  ngOnInit(): void {
    this.lichsu();

  }
  lichsudata: any[] = [];
  lichsu() {
    this.lsx.getalllsx(1).subscribe(
      Response => {
        this.lichsudata = Response.data;
        console.log(this.lichsudata)
      }


    )
  }
}
