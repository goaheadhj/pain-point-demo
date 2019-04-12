import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PainPointListComponent } from './pain-point-list/pain-point-list.component';
import { PaintPointItemComponent } from './paint-point-item/paint-point-item.component';
import { RootCauseListComponent } from './root-cause-list/root-cause-list.component';
import { RootCauseItemComponent } from './root-cause-item/root-cause-item.component';
import { RootCauseLinkComponent } from './root-cause-link/root-cause-link.component';
import { RootCauseEditorComponent } from './root-cause-editor/root-cause-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    PainPointListComponent,
    PaintPointItemComponent,
    RootCauseListComponent,
    RootCauseItemComponent,
    RootCauseLinkComponent,
    RootCauseEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
