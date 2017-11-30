"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HomeComponent = (function () {
    function HomeComponent() {
        this.welcome = "List of Tax Rate Settings";
        this.rateSettings = [{
                Year: 2017,
                Category: "Tax",
                SettingName: "FicaCutOff",
                Value: 123456
            },
            {
                Year: 2017,
                Category: "Tax",
                SettingName: "FicaCutRate",
                Value: 0.658
            }];
    }
    ;
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: "<h1>{{welcome}}</h1>\n    <p>Create New Entry</p>\n    <table class=\"table\">\n        <tr>\n            <th>#</th>\n            <th>Year</th>\n            <th>Category</th> \n            <th>Setting Name</th>\n            <th>Value</th>\n        </tr>\n        <tr *ngFor=\"let ratesetting of rateSettings; let i = index\">\n            <td>{{i + 1}}</td>\n            <td>{{ratesetting.Year}}</td>\n            <td>{{ratesetting.Category | uppercase}}</td>\n            <td>{{ratesetting.SettingName}}</td>\n            <td>{{ratesetting.Value}}</td>\n        </tr>\n    </table>"
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
;
//# sourceMappingURL=BU_home.Component.js.map