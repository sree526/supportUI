import {Injectable} from '@angular/core';
import {Http} from '@angular/http'
import {URL} from './urls'
import 'rxjs';
@Injectable()
export class LoginService{
     constructor(private http: Http){}
    login(data){
        let url=URL.supportLogin;
        return this.http.post(url,data).map(response=>response)
    }
}