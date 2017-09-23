import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbkidComponent } from './nbkid.component';

describe('NbkidComponent', () => {
  let component: NbkidComponent;
  let fixture: ComponentFixture<NbkidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbkidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbkidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
