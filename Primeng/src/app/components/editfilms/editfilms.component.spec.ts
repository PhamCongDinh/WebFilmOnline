import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditfilmsComponent } from './editfilms.component';

describe('EditfilmsComponent', () => {
  let component: EditfilmsComponent;
  let fixture: ComponentFixture<EditfilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditfilmsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditfilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
