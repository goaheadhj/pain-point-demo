import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SourcePointListComponent } from './source-point-list/source-point-list.component';
import { SourcePointItemComponent } from './source-point-item/source-point-item.component';
import { TargetPointListComponent } from './target-point-list/target-point-list.component';
import { TargetPointItemComponent } from './target-point-item/target-point-item.component';
import { SourcePointLinkComponent } from './source-point-link/source-point-link.component';
import { PointConnectEditorComponent } from './point-connect-editor/point-connect-editor.component';
import { TextBlockComponent } from './text-block/text-block.component';
import { SourcePointLinksComponent } from './source-point-links/source-point-links.component';

@NgModule({
  declarations: [
    AppComponent,
    SourcePointListComponent,
    SourcePointItemComponent,
    TargetPointListComponent,
    TargetPointItemComponent,
    SourcePointLinkComponent,
    PointConnectEditorComponent,
    TextBlockComponent,
    SourcePointLinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
