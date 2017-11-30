import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { RateSettings } from './rateSettings';
import {RateSettingService} from '../rateSetting.service';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { Console } from '@angular/core/src/console';
import { Array } from 'core-js/library/web/timers';


@Component({
    selector: 'app-home',
    //templateUrl: './app/home/home.Component.html',
    template :`<h1>{{welcome}}</h1>
    <p>Create New Entry</p>
    <table class="table">
        <tr>
            <th>#</th>
            <th>Year</th>
            <th>Category</th> 
            <th>Setting Name</th>
            <th>Value</th>
        </tr>
        <tr *ngFor="let ratesetting of rateSettings; let i = index">
            <td>{{i + 1}}</td>
            <td>{{ratesetting.Year}}</td>
            <td>{{ratesetting.Category | uppercase}}</td>
            <td>{{ratesetting.SettingName}}</td>
            <td>{{ratesetting.Value}}</td>
        </tr>
    </table>`,
    providers: [RateSettingService]
})
export class HomeComponent implements OnInit {
    welcome : string;
    rateSettings: RateSettings[];//in TypeScript this is how you define an Array of Objects. not [ { ..... }] :) .. this is just the interface of the variable...you haven't actually created it yet.
    year:string
    //rateSettings:[{}]
//just for now. //uncomment above pls could it be potent

   /*constructor(){
        this.welcome = "List of Tax Rate Settings"

        this.rateSettings =[{
            Year : 2017,
            Category : "Tax",
            SettingName : "FicaCutOff",
            Value : 123456
        },
        {
            Year : 2017,
            Category : "Tax",
            SettingName : "FicaCutRate",
            Value : 0.658
        }]
    };*/
    constructor(private _rateSettingService: RateSettingService ) {//private http: Http
        
        this.rateSettings=[]; //here you actually initialize it to an empty array...which is still ok to typescript..
        this.year = '2018'
    }
    ngOnInit() {
        console.log("Inside Home Component . . ")
        console.log(this.rateSettings);
        //console.log("getRateSettingForYear returns: " + this._rateSettingService.getRateSettingsForYear())
        this._rateSettingService.getRateSettingsForYear(this.year)
         .subscribe(
            (dataFromObservable: RateSettings[]) => this.rateSettings = dataFromObservable,
            err => console.error(err)
        )
            
            
        //     (data)=>{
        //     console.log("retured to Home Componenet . . ")
        //     console.log('Inside observable Callback', data)
        //     //console.log(this.rateSettings + "after returning to hom ecomponenet")
        //     this.rateSettings = data
        // });
     
       
        //this._http.get('/api/RateCalculatorSettings/Tax').map((res : Response)=>{
        //    const jsonResponse = res.json()
        //    //FYI, try not to use capital letters in your API routes... it sucks to debug later... also. i'm not sure you can call .json() 2x
        //  return jsonResponse;
        //})
        //.catch((err: Response|any)=>{
        //  return Observable.throw(err.json());
        //}).subscribe((data)=>{   
        //    console.log(data)  
        //    this.rateSettings = data
        //}, (err)=>{
        //  console.log(err);
        //  
        // // this.myQuote.quote = "Error in fetching data"; //set our myQuote Object
        //  //this.myQuote.by = "Error in fetching data"; //set our myQuote Object
        //});
    }
};

            //one sec // just wantes to see if it maps more than 1 element =
            // ok so.. you tracking with what we did? both of you all?
            //si, Rajesh thinks youre a genius. Dont le tit get to your head.hahaha
            // ok so i want you guys to write GOOD code, not just working code... so next step is to get this API call OUT of your component and INTO a service.
            //NEVER call your api from your components directly, always use a service

            //// yeah the tutorial we were going throhg, the next portion is to put it into a service but we never got to that cause of the CORS thing
            //this morning one of the other developers asked us to port this entire page into VS but that ended horribly so we came back to this and decided to get the proxy to work
            //the issue with the proxy was jus thta i didnt put it in the root folder right? plus some small edits to the web api call?...

            // yes you had it in the app folder, not the root..
            // port to VS?? visual stuido?
            // yeah vs in our web api proj
            // so.l.et me show you quickly thats where it was
            // 

            // idk this guy... but he seems like a toolbag. ;) 

            // seperation of concerns... keep your API and your app in seperate code bases...otherwise you will hate yourself.

            //yeah we hate ourselves enough

            // well i love you guys! :) don't be too hard on yourself it's not easy learning all these new peices. HMU anytime, i'll help when i can... go read about
            // services and make that work.... if the other dev pushs back about putting this code into your api ...idk call me and i'll comem talk to him lol

            //aye capitan. We will get to the services since we got this up and running. Thanks again big time dude. :) anytime..ttyl
            