"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_Component_1 = require("./home/home.Component");
var about_Component_1 = require("./about/about.Component"); //import about component
var appRoutes = [
    { path: 'home', component: home_Component_1.HomeComponent },
    { path: 'about', component: about_Component_1.AboutComponent },
    { path: '', component: home_Component_1.HomeComponent, pathMatch: 'full' } // redirect to home page on load
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map