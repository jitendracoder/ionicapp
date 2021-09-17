import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guard/auth.guard';


const routes: Routes = [
  {
    path:'', redirectTo:'login',pathMatch:'full'
  },
  {path:'login', component:LoginComponent},
  {
    path: 'dashboard',
    canActivate:[AuthGuard],
    loadChildren: () => import('./modules/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
