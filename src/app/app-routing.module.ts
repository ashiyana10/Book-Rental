import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyBooksComponent } from './buy-books/buy-books.component';

const routes: Routes = [
  {
    path: '',
    component: BuyBooksComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
