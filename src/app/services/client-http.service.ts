import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = 'https://two-beans-sit-115-113-96-66.loca.lt';

@Injectable({
  providedIn: 'root'
})
export class ClientHttpService {

  constructor(private http: HttpClient) { }

  getRequest(url: string) {

    return this.http.get(`${BASE_URL}${url}`);

  }
}
