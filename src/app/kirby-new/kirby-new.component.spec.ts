import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KirbyNewComponent } from './kirby-new.component';

describe('KirbyNewComponent', () => {
  let component: KirbyNewComponent;
  let fixture: ComponentFixture<KirbyNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KirbyNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KirbyNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
