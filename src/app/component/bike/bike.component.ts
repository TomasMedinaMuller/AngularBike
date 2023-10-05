import { Component } from '@angular/core';
import { Bike } from 'src/app/models/bike';
import { SbikeService } from 'src/app/service/sbike.service';

@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.css']
})
export class BikeComponent {

  // Importamos la Interface
  allImages: Bike[] = [];
  // Creamos la instancia del Pipes
  filterBy: string = 'all';

  // implementamos el service en el constructor, y obtenemos el array que esta en el service
  constructor(private Sbike: SbikeService) {
    //el Dependency Inyector y almacenamos la respuesta en un atributo (allImages) de nuestro componentes
    this.allImages = Sbike.getImages();
  }

}
