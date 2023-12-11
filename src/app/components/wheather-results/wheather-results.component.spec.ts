import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WheatherResultsComponent } from './wheather-results.component';

describe('WheatherResultsComponent', () => {
  let component: WheatherResultsComponent;
  let fixture: ComponentFixture<WheatherResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WheatherResultsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WheatherResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
