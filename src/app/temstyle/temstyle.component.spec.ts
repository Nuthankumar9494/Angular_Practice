import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemstyleComponent } from './temstyle.component';

describe('TemstyleComponent', () => {
  let component: TemstyleComponent;
  let fixture: ComponentFixture<TemstyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemstyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
