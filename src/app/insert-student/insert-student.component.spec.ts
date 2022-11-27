import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertStudentComponent } from './insert-student.component';

describe('InsertStudentComponent', () => {
  let component: InsertStudentComponent;
  let fixture: ComponentFixture<InsertStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
