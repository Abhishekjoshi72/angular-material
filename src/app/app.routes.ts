import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Assignment1Component } from './assignment-1/assignment-1.component';
import { Assignment2Component } from './assignment-2/assignment-2.component';
import { Assignment3Component } from './assignment-3/assignment-3.component';
import { Assignment4Component } from './assignment-4/assignment-4.component';
import { Assignment5Component } from './assignment-5/assignment-5.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        children:[
            {
                path: '',
                component: HomeComponent  
              },
            {
                path: 'Assignment_1',
                component: Assignment1Component,
               
            },
            {
                path: 'Assignment_2',
                component: Assignment2Component,
               
            },
            {
                path: 'Assignment_3',
                component: Assignment3Component,
               
            },
            {
                path: 'Assignment_4',
                component: Assignment4Component,
               
            },
            {
                path: 'Assignment_5',
                component: Assignment5Component,
               
            }
        ]
    },
    // {
    //     path: 'Assignment_1',
    //     component: Assignment1Component,
    //    
    // },
    // {
    //     path: 'Assignment_2',
    //     component: Assignment2Component,
    //    
    // },
    // {
    //     path: 'Assignment_3',
    //     component: Assignment3Component,
    //    
    // },
    // {
    //     path: 'Assignment_4',
    //     component: Assignment4Component,
    //    
    // },
    // {
    //     path: 'Assignment_5',
    //     component: Assignment5Component,
    //    
    // },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
];
