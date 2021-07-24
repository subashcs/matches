import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultFormComponent } from './result-form.component';

const routes: Routes = [
  { path: 'edit/:id', component: ResultFormComponent, pathMatch: 'full' },
  { path: '', component: ResultFormComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatchTableRoutingModule {}
