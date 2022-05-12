import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReferralService {

  API_URL = environment.API_URL + '/referral';

  constructor(private http: HttpClient) { }

  getAllReferrals() {
    return this.http.get(this.API_URL + '/v1/opening/GEEK-4/referrals');
  }

  getReferralById(id) {
    
  }
}
