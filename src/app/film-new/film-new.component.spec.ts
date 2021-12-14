import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmNewComponent } from './film-new.component';

describe('FilmViewComponent', () => {
  let component: FilmNewComponent;
  let fixture: ComponentFixture<FilmNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
