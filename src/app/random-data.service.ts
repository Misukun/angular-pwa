import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RandomDataService {

  randomData: number[];

  constructor(private http: HttpClient) { }

  fetchData() {
    return this.http
      .get(
        'https://www.random.org/integers/?num=4&min=1&max=20&col=1&base=10&format=plain&rnd=new',
        { responseType: 'text' },
      );
  }
}
