import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GgtvComponent } from './ggtv.component';

describe('GgtvComponent', () => {
  let component: GgtvComponent;
  let fixture: ComponentFixture<GgtvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GgtvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GgtvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
