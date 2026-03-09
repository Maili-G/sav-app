import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalMention } from './legal-mention';

describe('LegalMention', () => {
  let component: LegalMention;
  let fixture: ComponentFixture<LegalMention>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegalMention]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegalMention);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
