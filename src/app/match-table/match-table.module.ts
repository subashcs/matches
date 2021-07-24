import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchTableComponent } from './match-table.component';
import { MatchTableRoutingModule } from './match-table-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [MatchTableComponent],
  imports: [CommonModule, MatchTableRoutingModule, SharedModule],
})
export class MatchTableModule {}
