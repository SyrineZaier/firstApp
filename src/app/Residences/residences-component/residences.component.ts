import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Residence } from 'src/app/Core/Models/residence';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {
  constructor(private router: Router) {}
  listResidences:Residence[]=[
    {id:1,"name": "El fel","address":"Borj Cedria", "image":"../../assets/image/R1.jpeg", status: "Disponible"},
     {id:2,"name": "El yasmine", "address":"Ezzahra","image":"../../assets/image/R2.jpg", status: "Disponible" },
     {id:3,"name": "El Arij", "address":"Rades","image":"../../assets/image/R3.jpg", status: "Vendu"},
     {id:4,"name": "El Anber","address":"inconnu", "image":"../../assets/image/R4.jpg", status: "En Construction"}
   ];
   showLocation(address: string): void {
    if (address === "inconnu") {
      alert("L'adresse de cette résidence est inconnue");
    } else {
      alert("Adresse de la résidence: " + address);
    }
  }
  favorites: Residence[] = []; 

  addToFavorites(residence: Residence): void {
    if (!this.favorites.some(fav => fav.id === residence.id)) {
      this.favorites.push(residence);
      alert(`"${residence.name}" has been added to your favorites!`);
    } else {
      alert(`"${residence.name}" is already in your favorites.`);
    }
  }
  searchQuery: string = ''; 

  filteredResidences(): Residence[] {
   return this.listResidences.filter(residence =>
      residence.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
goToResidenceDetails(id: number): void {
    const residence = this.listResidences.find((r) => r.id === id);
    if (residence) {
      this.router.navigate(['/residence-details', id], {
        state: { residence }, 
      });
    } else {
      console.error('Residence not found in listResidences:', id);
    }
  }
  

 
}
