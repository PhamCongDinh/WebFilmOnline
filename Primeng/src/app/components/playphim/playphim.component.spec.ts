import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayphimComponent } from './playphim.component';

describe('PlayphimComponent', () => {
  let component: PlayphimComponent;
  let fixture: ComponentFixture<PlayphimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayphimComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayphimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
