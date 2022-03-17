import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { SignalrComponent } from './signalr.component';
import { SignalrService } from './signalr.service';

@NgModule({
  declarations: [
    SignalrComponent
  ],
  imports: [
    BrowserModule,
    MatProgressBarModule,
    NoopAnimationsModule
  ],
  providers: [
    SignalrService,
    {
      provide: APP_INITIALIZER,
      useFactory: (signalrService: SignalrService) => () => signalrService.initiateSignalrConnection(),
      deps: [SignalrService],
      multi: true,
    }
  ],
  bootstrap: [SignalrComponent]
})
export class AppModule { }
