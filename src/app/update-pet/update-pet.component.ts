import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';
import { Pet } from '../pet';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-pet',
  templateUrl: './update-pet.component.html',
  styleUrls: ['./update-pet.component.css']
})
export class UpdatePetComponent implements OnInit {

  id!: number;
  pet: Pet = new Pet();

  constructor(private petService: PetService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.petService.getPetById(this.id).subscribe(data => {
      this.pet = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.petService.updatePet(this.id, this.pet).subscribe( data => {
      this.goToPetList();
  }, error => console.log(error));
}

goToPetList() {
  this.router.navigate(['/pets']);
}


}
