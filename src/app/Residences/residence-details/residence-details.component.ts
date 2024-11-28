import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css']
})
export class ResidenceDetailsComponent implements OnInit{
  currentId!: number;
  residence: any;
  listResidences: any;
  constructor(private route: ActivatedRoute, public router: Router) {}
  ngOnInit(): void {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.residence = navigation.extras.state['residence'];
      this.currentId = this.residence.id;
    } else {
      this.route.params.subscribe((params) => {
        this.currentId = +params['id'];
        this.fetchResidenceById(this.currentId); 
      });
    }
  }
  
  fetchResidenceById(id: number): void {
    const allResidences = [
      { id: 1, name: "El fel", address: "Borj Cedria", image: "../../assets/image/R1.jpeg", status: "Disponible" },
      { id: 2, name: "El yasmine", address: "Ezzahra", image: "../../assets/image/R2.jpg", status: "Disponible" },
      { id: 3, name: "El Arij", address: "Rades", image: "../../assets/image/R3.jpg", status: "Vendu" },
      { id: 4, name: "El Anber", address: "inconnu", image: "../../assets/image/R4.jpg", status: "En Construction" }
    ];
    this.residence = allResidences.find(r => r.id === id);
    if (!this.residence) {
      console.error(`Residence with ID ${id} not found.`);
    }
  }
    
  goToNext(): void {
    const nextId = this.currentId + 1;
    this.router.navigate(['/residence-details', nextId]);
  }
}
