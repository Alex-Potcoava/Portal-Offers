import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NofertaComponent } from './noferta.component';

describe('NofertaComponent', () => {
  let component: NofertaComponent;
  let fixture: ComponentFixture<NofertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NofertaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NofertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
