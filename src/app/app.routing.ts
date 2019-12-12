import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
    {
        path: 'custom',
        loadChildren: () => import('./custom/custom.module').then(m => m.CustomModule),
        // canActivate: [AuthGuard]
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }