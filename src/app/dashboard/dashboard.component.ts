import { Component, OnInit } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SidenavListComponent } from '../Navigation/sidenav-list/sidenav-list.component';
import { NavtabsComponent } from '../Navigation/navtabs/navtabs.component';
import { ToolbarComponent } from '../Navigation/toolbar/toolbar.component';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,MatSidenavModule,MatToolbarModule, MatCardModule,SidenavListComponent,NavtabsComponent,ToolbarComponent, RouterOutlet,RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  constructor(
    private router: Router
  ){}

  ngOnInit(): void {
   
  }


}
