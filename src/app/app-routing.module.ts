import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PointConnectEditorComponent } from './point-connect-editor/point-connect-editor.component';

const routes: Routes = [
  {
    path: '',
    component: PointConnectEditorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
