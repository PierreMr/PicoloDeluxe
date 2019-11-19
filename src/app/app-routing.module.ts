import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'game', loadChildren: './game/game.module#GamePageModule' },
  { path: 'add-category', loadChildren: './categories/add-category/add-category.module#AddCategoryPageModule' },
  { path: 'list-categories', loadChildren: './categories/list-categories/list-categories.module#ListCategoriesPageModule' },
  { path: 'start-game', loadChildren: './game/start-game/start-game.module#StartGamePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
