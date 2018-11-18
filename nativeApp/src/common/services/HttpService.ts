import { Observable } from 'rxjs';
import { ajax, AjaxResponse } from 'rxjs/ajax';

import { authConfig, routeConfig } from '../../config/appConfig';
import { StorageService } from './StorageService';
import { Response } from '../models/httpModel';

export class HttpService {
    constructor(private readonly storageService: StorageService) {}

    public GET<R>(url: string): Observable<Response<R>> {
        return this.makeRequest('GET', url);
    }

    public PUT<B, R>(url: string, body: B): Observable<Response<R>> {
        return this.makeRequest('PUT', url, body);
    }

    public PATCH<B, R>(url: string, body: B): Observable<Response<R>> {
        return this.makeRequest('PATCH', url, body);
    }

    public POST<B, R>(url: string, body: B): Observable<Response<R>> {
        return this.makeRequest('POST', url, body);
    }

    public DELETE<R>(url: string): Observable<Response<R>> {
        return this.makeRequest('DELETE', url);
    }

    private makeRequest<B, R>(method: string, url: string, body?: B): Observable<Response<R>> {
        const bodyJSON = JSON.stringify(body);
        // const token = this.storageService.getItem(authConfig.tokenField);
        // const headers = {
        //     'Content-Type': 'application/json',
        //     Authorization: token ? `JWT ${token}` : null,
        // };

        const options = {
            method,
            // headers,
            body: bodyJSON,
        };

        const requestUrl = `${routeConfig.API_URL}${url}`;

        // return ajax({ ...options, url: requestUrl }) as Observable<AjaxResponse & Response<R>>;
        return ajax({
            ...options,
            url: 'https://2c7c96bf-c606-405b-ac25-3ba0920f34a6.mock.pstmn.io/users',
        }) as Observable<AjaxResponse & Response<R>>;
    }
}
