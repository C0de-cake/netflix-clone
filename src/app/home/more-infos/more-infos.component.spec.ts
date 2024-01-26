import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreInfosComponent } from './more-infos.component';

describe('MoreInfosComponent', () => {
  let component: MoreInfosComponent;
  let fixture: ComponentFixture<MoreInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoreInfosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoreInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
