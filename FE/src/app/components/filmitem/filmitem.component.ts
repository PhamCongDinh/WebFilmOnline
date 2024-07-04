import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filmitem',
  templateUrl: './filmitem.component.html',
  styleUrl: './filmitem.component.scss'
})
export class FilmitemComponent implements OnInit {
  @Input() phimdata: any[] = [];

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
