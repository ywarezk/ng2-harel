

import {NgModule} from "@angular/core";
import {HomeComponent} from "../home/home.component";
import {AboutComponent} from "../about/about.component";
import {RouterModule} from "@angular/router";
import {Error404Component} from "../error404/error404.component";
import {AdminComponent} from "../admin/admin.component";
import {IsLoggedIn} from "./is-logged-in.service";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      {path: 'tasks', loadChildren: '../../todo/todo.module#TodoModule'},
      {path: 'admin', component: AdminComponent, canActivate: [IsLoggedIn]},
      {path: '**', component: Error404Component}
    ])
  ],
  providers: [IsLoggedIn],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
