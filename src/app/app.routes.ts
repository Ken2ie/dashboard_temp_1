import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: "",
        component: DashboardComponent,
        loadChildren: () => import('../app/dashboard/dashboard.routes').then(m => m.routes),
    }
];
