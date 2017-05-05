import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { PageEditComponent } from './page-edit/page-edit.component';

const routes: Routes = [
    {path: '', component: PagesComponent },
    {path: 'edit/:id', component: PageEditComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);