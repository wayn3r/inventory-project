import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaccionDetailComponent } from './transaccion-detail.component';

describe('TransaccionDetailComponent', () => {
  let component: TransaccionDetailComponent;
  let fixture: ComponentFixture<TransaccionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransaccionDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransaccionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
