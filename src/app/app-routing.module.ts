import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddTestComponent} from './add-test/add-test.component'
import {ListTestComponent} from './list-test/list-test.component'
import { HomePageComponent } from './home-page/home-page.component';
const routes: Routes = [
  {
    path:'list-test',
    component:ListTestComponent
  },
  {
    component : AddTestComponent,
    path:'add-test'
  },
  {
    path:'home-page',
    component:HomePageComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
