import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DVDListComponent } from './DVD-list.component';

describe('DVDListComponent', () => {
  let component: DVDListComponent;
  let fixture: ComponentFixture<DVDListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DVDListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DVDListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
