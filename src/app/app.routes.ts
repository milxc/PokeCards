import { Routes } from '@angular/router';
import { LoginPage } from './pages/login/login.page';
import { PacksOverviewPage } from './pages/packs/packs-overview/packs-overview.page';

export const routes: Routes = [
    { path: '', component: LoginPage },
    { path: 'packs', component: PacksOverviewPage },
];
