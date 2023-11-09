import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetParams } from '../base/base.service.types';
import { CreateOasisData, GetAllOasesResponse } from './oasis.service.types';

@Injectable({
  providedIn: 'root',
})
export class OasisService {
  constructor(private http: HttpClient) {}

  public getAll(params: GetParams = {}) {
    return this.http.get<GetAllOasesResponse>('oases', { params });
  }

  public create(data: CreateOasisData) {
    return this.http.post('oases', data);
  }
}
