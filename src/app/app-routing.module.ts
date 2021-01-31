import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CypressComponent } from './cypress/cypress.component';

const routes: Routes = [
  { path: 'cypress', component: CypressComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
