import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HierarchyComponent } from './pages/hierarchy/hierarchy.component';
import { HomeComponent } from './pages/home/home.component';
import { JoinUsComponent } from './pages/join-us/join-us.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'organigramma',
    component: HierarchyComponent
  },
  {
    path: 'unisciti',
    component: JoinUsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
