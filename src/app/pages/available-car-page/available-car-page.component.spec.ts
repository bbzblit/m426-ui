import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableCarPageComponent } from './available-car-page.component';

describe('AvailableCarPageComponent', () => {
  let component: AvailableCarPageComponent;
  let fixture: ComponentFixture<AvailableCarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableCarPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailableCarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
