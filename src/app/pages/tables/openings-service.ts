import { Injectable } from '@angular/core';
import { ClientHttpService } from 'src/app/services/client-http.service';

const BASE_URL = 'https://two-beans-sit-115-113-96-66.loca.lt';

@Injectable({
  providedIn: 'root'
})
export class OpeningsService {

  openPositions: any = [];
  loading = false;

  constructor(private http: ClientHttpService) { }

  getOpenings() {

    this.loading = true;

    this.http.getRequest('/referral/v1/openings').subscribe((res) => {
      this.openPositions = res;
      this.loading = false;
    });

  }
}
