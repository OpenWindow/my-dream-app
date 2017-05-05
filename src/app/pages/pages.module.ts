import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesComponent } from './pages.component';
import { PageEditComponent } from './page-edit/page-edit.component';

import { routing } from './pages.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    PagesComponent,
    PageEditComponent
  ]
})
export class PagesModule { }
