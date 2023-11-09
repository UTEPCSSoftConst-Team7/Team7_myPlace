import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCommandsComponent } from './admin-commands.component';

describe('AdminCommandsComponent', () => {
  let component: AdminCommandsComponent;
  let fixture: ComponentFixture<AdminCommandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCommandsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminCommandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
