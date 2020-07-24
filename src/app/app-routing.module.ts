import { SingleCoinComponent } from './component/coin/single-coin/single-coin.component';
import { EditCoinComponent } from './component/coin/edit-coin/edit-coin.component';
import { AddCoinComponent } from './component/coin/add-coin/add-coin.component';
import { NotFoundComponent } from './component/fixed/not-found/not-found.component';
import { CoinComponent } from './component/coin/coin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: CoinComponent },
  { path: 'coin', children: [
    { path: 'add', component: AddCoinComponent },
    { path: 'edit/:id', component: EditCoinComponent },
    { path: ':id', component: SingleCoinComponent },
    { path: '', component: CoinComponent, pathMatch: 'full' }
    ]
  },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
