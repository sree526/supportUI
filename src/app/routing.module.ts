import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupportLoginComponent } from './support-login/support-login.component';
import { ApplicationsComponent } from './applications/applications.component';
import { NbkidComponent } from './nbkid/nbkid.component';

const appRoutes: Routes = [
 {
       path:'',
        redirectTo:'/supportLogin',
        pathMatch:"full"
        },
        {
          path:'supportLogin',
          component:SupportLoginComponent
        },
        {
            path:'applications',
            component:ApplicationsComponent
          },
          {
            path:'nbkid',
            component:NbkidComponent

          },
];
    @NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
       { useHash: true }
      
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [

  ]
})
export class AppRoutingModule { }