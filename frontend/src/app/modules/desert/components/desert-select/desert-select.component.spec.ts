import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesertSelectComponent } from './desert-select.component';

describe('DesertSelectComponent', () => {
  let component: DesertSelectComponent;
  let fixture: ComponentFixture<DesertSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesertSelectComponent]
    });
    fixture = TestBed.createComponent(DesertSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
