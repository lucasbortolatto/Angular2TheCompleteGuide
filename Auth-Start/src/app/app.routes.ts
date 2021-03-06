import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from './unprotected/signin.component';
import { SignupComponent } from './unprotected/signup.component';
import { ProtectedComponent } from './protected/protected.component';
import { AuthGuard } from './shared/auth.guard';

export const APP_ROUTES = [
        { path: '', redirectTo: '/signup', pathMatch: 'full' },
        { path: 'signup', component: SignupComponent },
        { path: 'signin', component: SigninComponent },
        { path: 'protected', component: ProtectedComponent, canActivate:[AuthGuard] }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
