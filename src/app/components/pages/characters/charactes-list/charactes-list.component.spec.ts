import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactesListComponent } from './charactes-list.component';

describe('CharactesListComponent', () => {
  let component: CharactesListComponent;
  let fixture: ComponentFixture<CharactesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
