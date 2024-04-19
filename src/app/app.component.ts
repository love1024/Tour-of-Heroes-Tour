import { AfterViewInit, Component, inject } from '@angular/core';
import { ShepherdService } from 'angular-shepherd';
import { getSteps } from './steps';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'Tour of Heroes';
  steps = getSteps();
  shepherdService = inject(ShepherdService);

  ngAfterViewInit(): void {
    this.shepherdService.defaultStepOptions = {
      scrollTo: false,
      cancelIcon: {
        enabled: false,
      },
    };
    this.shepherdService.modal = true;
    this.shepherdService.confirmCancel = false;
    this.shepherdService.addSteps(this.steps.clearMessageSteps);

    // setTimeout(() => this.shepherdService.start(), 1000);
  }
}
