import {Injectable} from '@angular/core';
import {Http} from '@angular/http'
import {URL} from './urls'
import 'rxjs';
@Injectable()
export class NBKIDService{
     constructor(private http: Http){}
    addNbkId(data){
        let url=URL.addNbkId;
        return this.http.post(url,data).map(response=>response)
    }
}