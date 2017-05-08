import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { ModuleDefListComponent } from './module-def-list.component';

@Injectable()
export class ModuleDefsService {

  constructor(private dialog: MdDialog) { }

  showModuleDefs(title:string, message:string): Observable<boolean>{
    let dialogRef: MdDialogRef<ModuleDefListComponent>;
    dialogRef = this.dialog.open(ModuleDefListComponent, 
      { height: '400px', 
        width: '600px'
      });
    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.message = message;
    return dialogRef.afterClosed();
  }

}
