import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdButton, MdDialog, MdDialogRef } from '@angular/material';
import { ModuleDefListComponent } from '../module-def-list/module-def-list.component';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {
  selectedOption: string;
  constructor(private router: Router,
              private dialog: MdDialog) { }

  ngOnInit() {
  }

  goToPages(){
    this.router.navigate(['/pages']);
  }

  openModuleDef(){
    let dialogRef = this.dialog.open(ModuleDefListComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });
  }

}