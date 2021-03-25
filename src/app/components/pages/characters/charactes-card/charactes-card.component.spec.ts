import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactesCardComponent } from './charactes-card.component';

describe('CharactesCardComponent', () => {
  let component: CharactesCardComponent;
  let fixture: ComponentFixture<CharactesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactesCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
