import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { LayoutBodyComponent } from './layout/body/body.component';
import { LayoutHeadComponent } from './layout/layout-head/layout-head.component';
import { LayoutContentComponent } from './layout/layout-content/layout-content.component';
import { LayoutFooterComponent } from './layout/layout-footer/layout-footer.component';
import { MenuComponent } from './layout/menu/menu.component';


const appRoutes : Routes = [
  {path: 'home', component: HomeComponent},
  {path: "pages", loadChildren: 'app/pages/pages.module#PagesModule' },
  {path:'', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutBodyComponent,
    LayoutHeadComponent,
    LayoutContentComponent,
    LayoutFooterComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
