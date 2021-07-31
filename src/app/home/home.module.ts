import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { GroupByPipePipe } from './group-by-pipe.pipe';

@NgModule({
  declarations: [HomeComponent, GroupByPipePipe],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
