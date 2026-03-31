import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path : '', redirectTo :'login', pathMatch :'full', 
    },
    {
        path :  'login',
        component : LoginComponent
    },
    {
        path: '',
        component : LayoutComponent,
        children :[
            {
                path:'dashboard',
                component : DashboardComponent
            }
        ]
    }
    // {
    //     path: '',
    //     pathMatch: 'full',
    //     loadComponent: () => {
    //         return import('./components/home/home.component').then(m => m.HomeComponent)
    //     },
    // },
    // {
    //     path: 'todos',
    //     loadComponent: () => {
    //         return import('./todos/todos.component').then(m => m.TodosComponent)
    //     },
    // },
];
