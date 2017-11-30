import {Component} from '@angular/core';

@Component({
    selector: 'app-home',
    template: `<h1>{{welcome}}</h1>
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
    </table>`
})
export class HomeComponent {
    welcome : string;
    rateSettings :[{
        Year : number,
        Category : string,
        SettingName : string,
        Value : number
    }]
    constructor(){
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
    };
};