import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdButton, MdDialog, MdDialogRef } from '@angular/material';
import { ModuleDefListComponent } from '../../module-def-list/module-def-list.component';
import { ModuleDefsService } from '../../module-def-list/module-defs.service';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {
  selectedOption: string;
  result: any;
  constructor(private router: Router,
              private dialog: MdDialog,
              private moduleDefService: ModuleDefsService) { }

  ngOnInit() {
  }

  goToPages(){
    this.router.navigate(['/pages']);
  }

  openModuleDef(){
      this.moduleDefService
      .showModuleDefs('Confirm Dialog', 'Are you sure you want to do this?')
      .subscribe(res => this.result = res);
  }

}