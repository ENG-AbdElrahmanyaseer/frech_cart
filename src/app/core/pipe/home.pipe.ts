import { Pipe, PipeTransform } from '@angular/core';
import { productIN } from '../interface/product';

@Pipe({
  name: 'home',
  standalone: true
})
export class HomePipe implements PipeTransform {

  transform(products:productIN[] ,term:string): productIN[] {
    return products.filter( (item)=> item.title.toLowerCase().includes(term.toLowerCase()));
  }

}
