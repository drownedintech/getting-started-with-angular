import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () => import('./product-list/product-list.module').then(m => m.ProductListModule)
  },
  {
    path: '',
    component: HomeComponent
  },
  { path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
