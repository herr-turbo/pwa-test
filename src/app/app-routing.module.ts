import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './components/hello/hello.component';
import { FourOhFourComponent } from './components/four-oh-four/four-oh-four.component';
import { PeopleComponent } from './components/people/people.component';
import { SpeciesComponent } from './components/species/species.component';
import { PeopleDetailComponent } from './components/people-detail/people-detail.component';

const routes: Routes = [
  {path: 'hello', component: HelloComponent},
  {path:'people', component:PeopleComponent},
  {path:'people/:id', component:PeopleDetailComponent},
  {path:'species', component:SpeciesComponent},
  {path: '', component:HelloComponent},
  {path: 'not-found', component: FourOhFourComponent},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
