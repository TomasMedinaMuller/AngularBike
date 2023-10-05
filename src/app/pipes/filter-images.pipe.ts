import { Pipe, PipeTransform } from '@angular/core';
import { reduce } from 'rxjs';

@Pipe({
  name: 'filterImages'
})
export class FilterImagesPipe implements PipeTransform {

  transform(items: any[], bike: string): any {
    if (bike == 'all'){
      //si me viene el parametro 'all' no filtramos y retornamos el array completo 
      return items;
    }else{
      //filtramos los elementos del array por su propiedad type que es la categoria de bicicleta.
      return  items.filter((item)=>{return item.brand == bike;})
    }
  }

}
