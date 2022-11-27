import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArraycurdComponent } from './arraycurd.component';

describe('ArraycurdComponent', () => {
  let component: ArraycurdComponent;
  let fixture: ComponentFixture<ArraycurdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArraycurdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArraycurdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
