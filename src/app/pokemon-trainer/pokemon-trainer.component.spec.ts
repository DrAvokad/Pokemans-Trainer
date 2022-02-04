import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonTrainerComponent } from './pokemon-trainer.component';

describe('PokemonTrainerComponent', () => {
  let component: PokemonTrainerComponent;
  let fixture: ComponentFixture<PokemonTrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonTrainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
