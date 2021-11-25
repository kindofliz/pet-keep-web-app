import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet';
import { PetService } from '../pet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-pet',
  templateUrl: './create-pet.component.html',
  styleUrls: ['./create-pet.component.css']
})
export class CreatePetComponent implements OnInit {

  pet: Pet = new Pet();

  constructor(private petService: PetService,
    private router: Router) { }

  ngOnInit(): void {
  }


  savePet() {
    this.petService.createPet(this.pet).subscribe(data => {
      console.log(data);
    },
    error => console.log(error));
  }

  onSubmit() {
    console.log(this.pet);
    this.savePet();
    this.goToPetList();
  }

  goToPetList() {
    this.router.navigate(['/pets']);
  }

}
