import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CustomComponent } from './custom.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: CustomComponent
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomRoutingModule { }