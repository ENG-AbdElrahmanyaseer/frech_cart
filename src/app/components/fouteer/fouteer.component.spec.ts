import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FouteerComponent } from './fouteer.component';

describe('FouteerComponent', () => {
  let component: FouteerComponent;
  let fixture: ComponentFixture<FouteerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FouteerComponent]
    });
    fixture = TestBed.createComponent(FouteerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
