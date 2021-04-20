import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebitHomepageComponent } from './components/webit-homepage/webit-homepage.component';

const routes: Routes = [
  {path: '', component: WebitHomepageComponent, pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
