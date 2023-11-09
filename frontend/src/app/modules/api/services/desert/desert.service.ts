import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { GetParams } from '../base/base.service.types';
import { GetAllDesertsResponse } from './desert.service.types';

@Injectable({
  providedIn: 'root',
})
export class DesertService {
  constructor(private http: HttpClient) {}

  // TODO: filter type
  public getAll(filters: GetParams = {}) {
    return this.http.get<GetAllDesertsResponse>('deserts', { params: filters });
  }

  public create(name: string) {
    return this.http.post('deserts', { name }, {});
  }
}
