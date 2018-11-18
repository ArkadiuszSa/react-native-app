import { Observable } from 'rxjs';

import { routeConfig } from '../../../config/appConfig';
import { StorageService } from '../../../common/services/StorageService';
import { Response } from '../../../common/models/httpModel';
import { HttpService } from '../../../common/services/HttpService';
import { Credentials } from '../models/authModel';

export class AuthService {
    private storageService = new StorageService();
    private httpService = new HttpService(this.storageService);

    public register(credentails: Credentials): Observable<Response<String>> {
        console.log('odpalam');
        return this.httpService.GET(routeConfig.users);
    }
}
