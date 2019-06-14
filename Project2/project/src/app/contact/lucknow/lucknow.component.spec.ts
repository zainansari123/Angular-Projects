import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LucknowComponent } from './lucknow.component';

describe('LucknowComponent', () => {
  let component: LucknowComponent;
  let fixture: ComponentFixture<LucknowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LucknowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LucknowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
