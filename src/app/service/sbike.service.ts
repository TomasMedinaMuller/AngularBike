import { Injectable } from '@angular/core';
import { Bike } from '../models/bike';

@Injectable({
  providedIn: 'root'
})
export class SbikeService {

  // importamos la interface
  allImages: Bike [] =[]; 

  // metodo que retorna el listado completo de Images
  getImages(){
    return ImagesDetails.slice(0);
  }

  // metodo que retorna una image segun su Id 
  getImageById(id : Number){
    return ImagesDetails.slice(0).find(image => image.id == id)
  }

  
}

// Constante que contiene los datos de las images 
const ImagesDetails = [
  { "id": 1 , "brand": "adultosrc" , "url": "assets/images/bk1.jpg"},
  { "id": 2 , "brand": "adultosrc" , "url": "assets/images/bk2.jpg"},
  { "id": 3 , "brand": "adultosrc" , "url": "assets/images/bk3.jpg"},
  { "id": 4 , "brand": "adultosrc" , "url": "assets/images/bk4.jpg"},
  { "id": 5 , "brand": "bkeco" , "url": "assets/images/bkeco1.jpg"},
  { "id": 6 , "brand": "bkeco" , "url": "assets/images/bkeco2.jpg"},
  { "id": 7 , "brand": "bkeco" , "url": "assets/images/bkeco3.jpg"},
  { "id": 8 , "brand": "bkeco" , "url": "assets/images/bkeco4.jpg"},
  { "id": 9,   "brand": "bkmotor" , "url": "assets/images/bkmotor1.jpg"},
  { "id": 10 , "brand": "bkmotor" , "url": "assets/images/bkmotor2.jpg"},
  { "id": 11 , "brand": "bkmotor" , "url": "assets/images/bkmotor3.jpg"},
  { "id": 12 , "brand": "bkmotor" , "url": "assets/images/bkmotor4.jpg"},
  { "id": 13 , "brand": "bkmotor" , "url": "assets/images/bkmotor5.jpg"},
  { "id": 14 , "brand": "nenesrc" , "url": "assets/images/bknenes1.jpg"},
  { "id": 15 , "brand": "nenesrc" , "url": "assets/images/bknenes2.jpg"},
  { "id": 16 , "brand": "nenesrc" , "url": "assets/images/bknenes3.jpg"},
  { "id": 17 , "brand": "nenesrc" , "url": "assets/images/bknenes4.jpg"}
];
