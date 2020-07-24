import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ScrollingModule} from '@angular/cdk/scrolling';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './component/fixed/navigation/navigation.component';
import { SearchCoinsComponent } from './component/fixed/search-coins/search-coins.component';
import { NotFoundComponent } from './component/fixed/not-found/not-found.component';
import { CoinComponent } from './component/coin/coin.component';
import { PreviewCoinComponent } from './component/coin/preview-coin/preview-coin.component';
import { SingleCoinComponent } from './component/coin/single-coin/single-coin.component';
import { EditCoinComponent } from './component/coin/edit-coin/edit-coin.component';
import { AddCoinComponent } from './component/coin/add-coin/add-coin.component';
import { TitleAreaComponent } from './component/fixed/title-area/title-area.component';
import { CustomyearPipe } from './customyear.pipe';
import { CustomvaluePipe } from './customvalue.pipe';
import { NoCoinShowComponent } from './component/coin/no-coin-show/no-coin-show.component';
import { CoinFallinComponent } from './component/coin/coin-fallin/coin-fallin.component';
import { AuthorCoinComponent } from './component/coin/author-coin/author-coin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SearchCoinsComponent,
    NotFoundComponent,
    CoinComponent,
    PreviewCoinComponent,
    SingleCoinComponent,
    EditCoinComponent,
    AddCoinComponent,
    TitleAreaComponent,
    CustomyearPipe,
    CustomvaluePipe,
    NoCoinShowComponent,
    CoinFallinComponent,
    AuthorCoinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
