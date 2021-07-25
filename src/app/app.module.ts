import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { GroupByPipePipe } from './home/group-by-pipe.pipe';

@NgModule({
  declarations: [AppComponent, HomeComponent, GroupByPipePipe],
  imports: [BrowserModule, AppRoutingModule, SharedModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
