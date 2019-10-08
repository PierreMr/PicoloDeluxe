import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  rules: any[];

  constructor() {
    this.rules = [
      {
        text: 'Text 1',
        color: 'primary',
      },
      {
        text: 'Text 2',
        color: 'secondary',
      },
      {
        text: 'Text 3',
        color: 'tertiary',
      },
      {
        text: 'Text 4',
        color: 'success',
      },
      {
        text: 'Text 5',
        color: 'warning',
      },
      {
        text: 'Text 6',
        color: 'danger',
      },
      {
        text: 'Text 7',
        color: 'dark',
      },
      {
        text: 'Text 8',
        color: 'medium',
      },
      {
        text: 'Text 9',
        color: 'light',
      },
      {
        text: 'Text 10',
        color: 'custom',
      },
    ];
  }
}
