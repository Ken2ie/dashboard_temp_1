import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { SettingsComponent } from './settings/settings.component';
import { NotifyComponent } from './notify/notify.component';

export const routes: Routes = [
    {
        path: "",
        component: MainComponent
    },
    {
        path: "main",
        component: MainComponent
    },
    {
        path: "analysis",
        component: AnalysisComponent
    },
    {
        path: "settings",
        component: SettingsComponent
    },
    {
        path: "notifications",
        component: NotifyComponent
    },
];
