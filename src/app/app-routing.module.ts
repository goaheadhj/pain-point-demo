import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootCauseEditorComponent } from './root-cause-editor/root-cause-editor.component';

const routes: Routes = [
  {
    path: '',
    component: RootCauseEditorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
