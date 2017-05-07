import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule, MdDialog, OVERLAY_PROVIDERS } from '@angular/material';

import { PagesComponent } from './pages.component';
import { PageEditComponent } from './page-edit/page-edit.component';
import { ModuleDefListComponent } from '../module-def-list/module-def-list.component';
import { ModuleDefsService } from '../module-def-list/module-defs.service';


import { routing } from './pages.routing';



@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    routing,
  ],
  declarations: [
    PagesComponent,
    PageEditComponent,
    ModuleDefListComponent,
  ],
  providers: [
    MdDialog,
    OVERLAY_PROVIDERS,
    ModuleDefsService
  ],
  entryComponents: [
    ModuleDefListComponent,
  ]
})
export class PagesModule { }
