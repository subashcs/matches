import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchTableComponent } from './match-table.component';

const routes: Routes = [
  { path: '', component: MatchTableComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatchTableRoutingModule {}
