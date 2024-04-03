import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LichsuxemComponent } from './lichsuxem.component';

describe('LichsuxemComponent', () => {
  let component: LichsuxemComponent;
  let fixture: ComponentFixture<LichsuxemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LichsuxemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LichsuxemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
