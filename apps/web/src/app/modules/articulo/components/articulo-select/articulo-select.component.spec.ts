import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloSelectComponent } from './articulo-select.component';

describe('ArticuloSelectComponent', () => {
  let component: ArticuloSelectComponent;
  let fixture: ComponentFixture<ArticuloSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticuloSelectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArticuloSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
