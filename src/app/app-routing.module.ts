import { ScreentwoComponent } from './screentwo/screentwo.component';
import { ScreenoneComponent } from './screenone/screenone.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'screenone', component:ScreenoneComponent},
  {path:'screentwo', component:ScreentwoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
