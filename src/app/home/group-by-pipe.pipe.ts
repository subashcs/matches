import { Pipe, PipeTransform } from '@angular/core';
import { Match } from '../core';

@Pipe({
  name: 'groupByPipe',
})
export class GroupByPipePipe implements PipeTransform {
  transform(value: Array<Match>): Array<Array<Match>> {
    let groupedValues = value.reduce((acc, val) => {
      acc[val.date] = acc[val.date] || [];
      acc[val.date].push(val);

      return acc;
    }, {} as { [key: string]: Array<Match> });

    const getTimeStamp = (el: string) => new Date(el).getTime();

    return Object.keys(groupedValues)
      .map((key) => groupedValues[key])
      .sort((a, b) => getTimeStamp(b[0].date) - getTimeStamp(a[0].date));
  }
}
