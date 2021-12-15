import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoFiltersComponent } from './repo-filters.component';

describe('RepoFiltersComponent', () => {
  let component: RepoFiltersComponent;
  let fixture: ComponentFixture<RepoFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepoFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
