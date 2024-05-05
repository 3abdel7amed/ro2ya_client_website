import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { LandingComponent } from './landing/landing.component';
import { PropertyComponent } from './property/property.component';

@NgModule({
  declarations: [LandingComponent, PropertyComponent],
  imports: [CommonModule, FeaturesRoutingModule],
})
export class FeaturesModule {}
