import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet';
import { ActivatedRoute } from '@angular/router';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent implements OnInit {

  id!: number
  pet!: Pet

  constructor(private route: ActivatedRoute, private petService: PetService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    
    this.pet = new Pet();
    this.petService.getPetById(this.id).subscribe( data => {
      this.pet = data;
    });
  }

}
