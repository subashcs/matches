import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultFormComponent } from './result-form.component';
import { MatchTableRoutingModule } from './result-form-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ResultFormComponent],
  imports: [
    CommonModule,
    MatchTableRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class ResultFormModule {}
