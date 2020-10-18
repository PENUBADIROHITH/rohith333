import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreasupervisorComponent } from './areasupervisor.component';

describe('AreasupervisorComponent', () => {
  let component: AreasupervisorComponent;
  let fixture: ComponentFixture<AreasupervisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreasupervisorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreasupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
