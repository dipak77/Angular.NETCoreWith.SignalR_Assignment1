import { Component, OnInit } from '@angular/core';
import { SignalrService } from './signalr.service';

@Component({
  selector: 'app-root',
  templateUrl: './signalr.component.html',
  styleUrls: ['./signalr.component.scss']
})
export class SignalrComponent implements OnInit {
  hubHelloMessage: string;
  progressPercentage: number;
  progressMessage: string;
  processing: boolean;

  constructor(public signalrService: SignalrService) { }

  ngOnInit(): void {
    this.signalrService.connection
      .invoke('Hello')
      .catch(error => {
        console.log(`SignalrDemoHub.Hello() error: ${error}`);
        alert('SignalrDemoHub.Hello() error!, see console for details.');
      }
    );

    this.signalrService.hubHelloMessage.subscribe((hubHelloMessage: string) => {
      this.hubHelloMessage = hubHelloMessage;
    });

    this.signalrService.progressPercentage.subscribe((progressPercentage: number) => {
      this.progressPercentage = progressPercentage;
    });

    this.signalrService.progressMessage.subscribe((progressMessage: string) => {
      this.progressMessage = progressMessage;
    });
  }

  public processData(): void {
    this.processing = true;
    this.progressPercentage = 0;
    this.progressMessage = null;

    this.signalrService.connection
      .invoke('SimulateDataProcessing')
      .then(() => {
        this.processing = false;
      })
      .catch(error => {
        console.log(`SignalrDemoHub.SimulateDataProcessing() error: ${error}`);
        alert('SignalrDemoHub.SimulateDataProcessing() error!, see console for details.');
      }
    );
  }
}
