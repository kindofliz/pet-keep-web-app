import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet'
import { PetService } from '../pet.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {

  pets!: Pet[];

  constructor(private petService: PetService,
    private router: Router) { }

  ngOnInit(): void {
    this.getPets();
  }

  private getPets(){
    this.petService.getPetsList().subscribe(data => {
      this.pets = data;
    });
  }

  petDetails(id: number){
    this.router.navigate(['pet-details', id]);
  }

  updatePet(id: number){
    this.router.navigate(['update-pet', id]);
  }

  deletePet(id: number){
    this.petService.deletePet(id).subscribe(data => {
      console.log(data);
      this.getPets();
    })
  }


}
