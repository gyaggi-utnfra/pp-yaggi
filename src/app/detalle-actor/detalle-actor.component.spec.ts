import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleActorComponent } from './detalle-actor.component';

describe('DetalleActorComponent', () => {
  let component: DetalleActorComponent;
  let fixture: ComponentFixture<DetalleActorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleActorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
