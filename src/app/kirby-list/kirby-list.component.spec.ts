import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KirbyListComponent } from './kirby-list.component';

describe('KirbyListComponent', () => {
  let component: KirbyListComponent;
  let fixture: ComponentFixture<KirbyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KirbyListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KirbyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
