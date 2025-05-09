import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoincodeComponent } from './joincode.component';

describe('JoincodeComponent', () => {
  let component: JoincodeComponent;
  let fixture: ComponentFixture<JoincodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoincodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoincodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
