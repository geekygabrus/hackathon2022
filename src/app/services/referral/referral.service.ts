import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReferralService {

  API_URL = environment.API_URL + '/referral';

  constructor(private http: HttpClient) { }

  getAllOpenings() {
      return this.http.get(this.API_URL + '/v1/openings');
  }

  getAllReferrals() {
    return this.http.get(this.API_URL + '/v1/opening/GEEK-4/referrals');
  }

  getReferralById(openingId) {
    return this.http.get(this.API_URL + '/v1/opening/' + openingId + '/referrals');
  }

  getReferralStats() {
    return this.http.get(this.API_URL + '/v1/stats');
  }

  updateStatus(openingId, referralId, status) {
    return this.http.get(this.API_URL + `/v1/opening/${openingId}/referral/${referralId}/status/${status}`);
  }

  publishNewOpening(req) {
    return this.http.post(this.API_URL + `/v1/create-job-opening`, req);
  }
}
