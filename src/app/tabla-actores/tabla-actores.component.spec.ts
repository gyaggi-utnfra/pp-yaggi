import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaActoresComponent } from './tabla-actores.component';

describe('TablaActoresComponent', () => {
  let component: TablaActoresComponent;
  let fixture: ComponentFixture<TablaActoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaActoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaActoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
