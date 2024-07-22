import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherCheckComponent } from './weather-check.component';

describe('WeatherCheckComponent', () => {
  let component: WeatherCheckComponent;
  let fixture: ComponentFixture<WeatherCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherCheckComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeatherCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
