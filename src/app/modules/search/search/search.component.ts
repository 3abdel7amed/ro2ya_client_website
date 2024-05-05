import { Component, HostListener, OnInit, TemplateRef } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { FilterComponent } from 'src/app/shared/filter/filter.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InterestedComponent } from 'src/app/shared/interested/interested.component';
import { ContactComponent } from 'src/app/shared/contact/contact.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
  onResize() {
    if (window.innerWidth <= 768) {
      this.showSFButtons = true;
    } else {
      this.showSFButtons = false;
    }
  }
  constructor(
    private offcanvasService: NgbOffcanvas,
    private _modal: NgbModal,
    private _Router: Router
  ) {}
  showSFButtons: boolean = false;

  ngOnInit(): void {
    if (window.innerWidth <= 768) {
      this.showSFButtons = true;
    }
  }

  openFilter(): void {
    this.offcanvasService.open(FilterComponent, { position: 'end' });
  }

  openInterestOverlay(): void {
    this._modal.open(InterestedComponent, { centered: true });
  }

  openContactOverlay(): void {
    this._modal.open(ContactComponent, { centered: true });
  }

  openPropertyDetails(): void {
    this._Router.navigate(['features/property', 1]);
  }
}
