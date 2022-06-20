import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoTableComponent } from './components/demo-table/demo-table.component';
import { DemoTodoListComponent } from './components/demo-todo-list/demo-todo-list.component';
import { LayoutTwoComponent } from './components/layout-two/layout-two.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NextPageOneComponent } from './components/next-page-one/next-page-one.component';
import { NextPageTwoComponent } from './components/next-page-two/next-page-two.component';

const routes: Routes = [
  { path: '', component: LayoutComponent },
  {
    path: 'page-2',
    component: LayoutTwoComponent,
    children: [
      { path: '', component: NextPageOneComponent },
      { path: 'page-3', component: NextPageTwoComponent },
      { path: '**', redirectTo: 'next-one', pathMatch: 'full' },
    ],
  },

  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
