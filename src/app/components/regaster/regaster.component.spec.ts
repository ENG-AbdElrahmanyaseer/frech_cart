import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegasterComponent } from './regaster.component';

describe('RegasterComponent', () => {
  let component: RegasterComponent;
  let fixture: ComponentFixture<RegasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RegasterComponent]
    });
    fixture = TestBed.createComponent(RegasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
