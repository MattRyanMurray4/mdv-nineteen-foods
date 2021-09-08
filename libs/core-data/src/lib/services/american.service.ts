import { mapTo } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AmericanFood } from '@food/api-interfaces';

export const BASE_URL = 'https://warm-river-13356.herokuapp.com/';

@Injectable({
  providedIn: 'root',
})
export class AmericanFoodService {
  private model = 'a-foods';
  constructor(private httpClient: HttpClient) {}

  all() {
    return this.httpClient.get<AmericanFood[]>(this.getUrl());
  }

  find(id: string) {
    return this.httpClient.get<AmericanFood>(this.getUrlById(id));
  }

  create(americanFood: AmericanFood) {
    return this.httpClient.post<AmericanFood>(this.getUrl(), americanFood);
  }

  update(americanFood: AmericanFood) {
    return this.httpClient.patch<AmericanFood>(
      this.getUrlById(americanFood.id),
      americanFood
    );
  }

  delete(americanFoodId: string) {
    return this.httpClient
      .delete<string>(this.getUrlById(americanFoodId))
      .pipe(mapTo(americanFoodId));
  }

  private getUrl() {
    return `${BASE_URL}${this.model}`;
  }

  private getUrlById(id: string) {
    return `${this.getUrl()}/${id}`;
  }
}
