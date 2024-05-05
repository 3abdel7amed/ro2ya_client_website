import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  constructor(private _Router: Router) {}

  goToSearch(): void {
    this._Router.navigate(['/search']);
  }

  goToProperty(): void {
    this._Router.navigate(['features/property', 1]);
  }
}
