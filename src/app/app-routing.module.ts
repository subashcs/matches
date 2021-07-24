import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'table',
    pathMatch: 'full',
    loadChildren: () =>
      import('./match-table/match-table.module').then(
        (m) => m.MatchTableModule
      ),
  },
  {
    path: 'result',
    pathMatch: 'prefix',
    loadChildren: () =>
      import('./result-form/result-form.module').then(
        (m) => m.ResultFormModule
      ),
  },

  { path: '', pathMatch: 'full', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
