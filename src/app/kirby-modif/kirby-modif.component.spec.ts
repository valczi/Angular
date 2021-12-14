import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KirbyModifComponent } from './kirby-modif.component';

describe('KirbyModifComponent', () => {
  let component: KirbyModifComponent;
  let fixture: ComponentFixture<KirbyModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KirbyModifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KirbyModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
