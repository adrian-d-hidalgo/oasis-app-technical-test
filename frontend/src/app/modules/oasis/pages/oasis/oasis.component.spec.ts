import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OasisComponent } from './oasis.component';

describe('OasisComponent', () => {
  let component: OasisComponent;
  let fixture: ComponentFixture<OasisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OasisComponent]
    });
    fixture = TestBed.createComponent(OasisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
