import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarComponent } from './search-bar.component';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

function searchRecyclingCenters(): void {
  const searchBar = document.getElementById('search-bar') as HTMLInputElement;
  const query: string = searchBar.value.trim();
  if (query) {
      alert(`Buscando centros de reciclagem em: ${query}`);
  } else {
      alert("Por favor, digite uma cidade ou estado.");
  }
}
