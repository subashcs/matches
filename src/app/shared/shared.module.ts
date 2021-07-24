import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { MatchDetailComponent } from './match-detail/match-detail.component';

@NgModule({
  declarations: [TableComponent, MatchDetailComponent],
  imports: [CommonModule],
  exports: [TableComponent, MatchDetailComponent],
})
export class SharedModule {}
