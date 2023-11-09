import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { GetOptions, PostOptions } from './base.service.types';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  constructor(private http: HttpClient) {}

  public get(url: string, options: GetOptions) {
    return this.http.get(url, options);
  }

  public post(url: string, body: any | null, options: PostOptions) {
    return this.http.post(url, body, options);
  }
}
