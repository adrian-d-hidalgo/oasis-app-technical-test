import { HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';

export type GetParams =
  | HttpParams
  | {
      [param: string]:
        | string
        | number
        | boolean
        | ReadonlyArray<string | number | boolean>;
    };

export type GetHeaders =
  | HttpHeaders
  | {
      [header: string]: string | string[];
    };

export interface GetOptions {
  headers?: GetHeaders;
  context?: HttpContext;
  observe?: 'body';
  params?: GetParams;
  reportProgress?: boolean;
  responseType: 'arraybuffer';
  withCredentials?: boolean;
}

export interface PostOptions {
  headers?:
    | HttpHeaders
    | {
        [header: string]: string | string[];
      };
  context?: HttpContext;
  observe?: 'body';
  params?:
    | HttpParams
    | {
        [param: string]:
          | string
          | number
          | boolean
          | ReadonlyArray<string | number | boolean>;
      };
  reportProgress?: boolean;
  responseType: 'arraybuffer';
  withCredentials?: boolean;
}
