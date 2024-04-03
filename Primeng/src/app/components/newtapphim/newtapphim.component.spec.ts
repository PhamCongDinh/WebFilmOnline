import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtapphimComponent } from './newtapphim.component';

describe('NewtapphimComponent', () => {
  let component: NewtapphimComponent;
  let fixture: ComponentFixture<NewtapphimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewtapphimComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewtapphimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
