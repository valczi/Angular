import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KirbyComponent } from './kirby.component';

describe('KirbyComponent', () => {
  let component: KirbyComponent;
  let fixture: ComponentFixture<KirbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KirbyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KirbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
