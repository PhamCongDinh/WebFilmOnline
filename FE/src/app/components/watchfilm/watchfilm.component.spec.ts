import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchfilmComponent } from './watchfilm.component';

describe('WatchfilmComponent', () => {
  let component: WatchfilmComponent;
  let fixture: ComponentFixture<WatchfilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WatchfilmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WatchfilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
