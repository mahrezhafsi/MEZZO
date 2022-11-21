import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleutilisateurComponent } from './simpleutilisateur.component';

describe('SimpleutilisateurComponent', () => {
  let component: SimpleutilisateurComponent;
  let fixture: ComponentFixture<SimpleutilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleutilisateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleutilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
