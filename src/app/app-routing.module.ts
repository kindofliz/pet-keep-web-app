import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetListComponent } from './pet-list/pet-list.component';
import { CreatePetComponent } from './create-pet/create-pet.component';
import { UpdatePetComponent } from './update-pet/update-pet.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';

const routes: Routes = [
  {path: 'pets', component: PetListComponent},
  {path: 'create-pet', component: CreatePetComponent},
  {path: '', redirectTo: 'pets', pathMatch: 'full'},
  {path: 'update-pet/:id', component: UpdatePetComponent},
  {path: 'pet-details/:id', component: PetDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
