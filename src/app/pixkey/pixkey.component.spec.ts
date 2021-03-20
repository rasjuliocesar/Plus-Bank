import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PixkeyComponent } from './pixkey.component';

describe('PixkeyComponent', () => {
  let component: PixkeyComponent;
  let fixture: ComponentFixture<PixkeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PixkeyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PixkeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
