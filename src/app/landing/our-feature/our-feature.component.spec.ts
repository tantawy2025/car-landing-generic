import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurFeatureComponent } from './our-feature.component';

describe('OurFeatureComponent', () => {
  let component: OurFeatureComponent;
  let fixture: ComponentFixture<OurFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
