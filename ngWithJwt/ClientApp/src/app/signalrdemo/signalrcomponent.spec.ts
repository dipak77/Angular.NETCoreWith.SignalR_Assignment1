import { TestBed } from '@angular/core/testing';
import { SignalrComponent } from './signalr.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SignalrComponent
      ],
    }).compileComponents();
  });

  it('should create AppComponent', () => {
    const fixture = TestBed.createComponent(SignalrComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
