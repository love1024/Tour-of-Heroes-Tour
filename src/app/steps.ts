import { inject } from '@angular/core';
import { ShepherdService } from 'angular-shepherd';

export const getSteps = (): any => {
  const shepherdService = inject(ShepherdService);

  return {
    clearMessageSteps: [
      {
        attachTo: { element: '.message:nth-of-type(1)', on: 'top' },
        text: 'All the application level messages are presented in this section.',
        title: 'Clear Messages',
        buttons: [
          {
            text: 'Next',
            action: (): void => {
              shepherdService.next();
            },
          },
        ],
        arrow: true,
        canClickTarget: false,
      },
      {
        attachTo: { element: '#clearMessageButton', on: 'right' },
        text: 'This option can be used to clear all messages.',
        title: 'Clear Messages',
        buttons: [
          {
            text: 'Finish',
            action: (): void => {
              shepherdService.complete();
            },
          },
        ],
        arrow: true,
        canClickTarget: false,
      },
    ],
    addHeroSteps: [
      {
        attachTo: { element: '#new-hero', on: 'top' },
        advanceOn: { selector: '#new-hero', event: 'blur' },
        text: 'We can insert a new hero using this input box. Please enter a new hero name and click outside.',
        title: 'Add Hero',
        buttons: [
          {
            text: 'Cancel',
            action: (): void => {
              shepherdService.complete();
            },
          },
        ],
        arrow: true,
        canClickTarget: true,
      },
      {
        attachTo: { element: '.add-button', on: 'right' },
        advanceOn: { selector: '.add-button', event: 'click' },
        text: 'Now, click this button to add your entered hero.',
        title: 'Add Button',
        buttons: [
          {
            text: 'Cancel',
            action: (): void => {
              shepherdService.complete();
            },
          },
        ],
        arrow: true,
        canClickTarget: true,
      },
      {
        attachTo: { element: '.heroes>li:last-of-type', on: 'right' },
        text: 'We can see the created hero at the end of the list.',
        title: 'Added Hero',
        buttons: [
          {
            text: 'Finish',
            action: (): void => {
              shepherdService.complete();
            },
          },
        ],
        arrow: true,
        canClickTarget: true,
        beforeShowPromise: () => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(true);
            }, 1000);
          });
        },
      },
    ],
  };
};
