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
var core_1 = require("@angular/core");
var ErrorComponent = (function () {
    function ErrorComponent() {
        this.display = 'none';
    }
    ErrorComponent.prototype.onErrorHandled = function () {
        this.display = 'none';
    };
    return ErrorComponent;
}());
ErrorComponent = __decorate([
    core_1.Component({
        selector: 'app-error',
        templateUrl: './error.template.html',
        styles: ["\n    .backdrop {\n      background-color: rgba(0, 0, 0, 0.6);\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100vh;\n    }\n    "]
    }),
    __metadata("design:paramtypes", [])
], ErrorComponent);
exports.ErrorComponent = ErrorComponent;
