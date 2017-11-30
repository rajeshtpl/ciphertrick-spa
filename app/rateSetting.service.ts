import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { RateSettings } from './home/rateSettings';

@Injectable()

export class RateSettingService {
    //rateSettings: RateSettings[];

    constructor(private _http: Http){
        //this.rateSettings=[];
    }
    getRateSettingsForYear(year:string) : Observable<RateSettings[]> {
        return this._http.get(`/api/RateCalculatorSettings/${year}`)
          .map((res : Response)=>res.json())
          .catch((err: any)=> Observable.throw(err.json().error || 'Server Error'))
    }
}