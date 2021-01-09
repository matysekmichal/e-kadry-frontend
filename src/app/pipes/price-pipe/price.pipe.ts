import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(amount, decimalCount = 2, decimal = ',', thousands = ' ') {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    const negativeSign = amount < 0 ? '-' : '';

    const i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount), 0).toString();
    const j = (i.length > 3) ? i.length % 3 : 0;

    return negativeSign
      + (j ? i.substr(0, j) + thousands : '')
      + i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands)
      + (decimalCount ? decimal + Math.abs(amount - parseInt(i, 0)).toFixed(decimalCount).slice(2) : '');
  };

}
