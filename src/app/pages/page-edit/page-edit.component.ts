import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToPages(){
    this.router.navigate(['/pages']);
  }

}
