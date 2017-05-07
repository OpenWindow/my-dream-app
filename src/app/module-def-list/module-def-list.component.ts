import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-module-def-list',
  templateUrl: './module-def-list.component.html',
  styleUrls: ['./module-def-list.component.css']
})
export class ModuleDefListComponent implements OnInit {
  public title:string;
  public message:string;
  constructor(public dialogRef: MdDialogRef<ModuleDefListComponent>) {}

  ngOnInit() {
  }
}
