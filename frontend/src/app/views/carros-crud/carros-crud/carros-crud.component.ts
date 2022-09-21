import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carros-crud',
  templateUrl: './carros-crud.component.html',
  styleUrls: ['./carros-crud.component.css']
})
export class CarrosCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToCreate(): void {
    this.router.navigate(["/carros/create"]);
  }
}
