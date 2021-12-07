import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackthonComponent } from './hackthon.component';

describe('HackthonComponent', () => {
  let component: HackthonComponent;
  let fixture: ComponentFixture<HackthonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HackthonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HackthonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
