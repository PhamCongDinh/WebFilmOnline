import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmitemComponent } from './filmitem.component';

describe('FilmitemComponent', () => {
  let component: FilmitemComponent;
  let fixture: ComponentFixture<FilmitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilmitemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilmitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
