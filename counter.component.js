"use strict";
// import { NgModule, Component, Input, Output, Injectable, EventEmitter } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
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
// @Component({
//     selector: 'counter',
//     template: `
//     <div class="content">
//         <button (click)="increment()">+</button>
//         <button (click)="decrement()">-</button>
//         <h3>{{counter}}</h3>
//     </div>
//     `
// })
// export class CounterComponent{
//     counter = 0;
//     increment(){
//         this.counter += 1;
//     }
//     decrement(){
//         this.counter -= 1;
//     }
// }
var core_1 = require("@angular/core");
var CounterComponent = (function () {
    function CounterComponent() {
        this.increment = new core_1.EventEmitter();
        this.decrement = new core_1.EventEmitter();
    }
    return CounterComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CounterComponent.prototype, "counter", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CounterComponent.prototype, "increment", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CounterComponent.prototype, "decrement", void 0);
CounterComponent = __decorate([
    core_1.Component({
        selector: 'counter',
        template: "\n    <div class=\"col-md-3\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-body\">\n                <button (click)=\"increment.emit(counter.id)\" class=\"btn btn-success\">+</button>\n                <label>{{counter.count}}</label>\n                <button (click)=\"decrement.emit(counter.id)\"  class=\"btn btn-success\">-</button>        \n            </div>\n        </div>\n    <div>\n    ",
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    })
], CounterComponent);
exports.CounterComponent = CounterComponent;
//# sourceMappingURL=counter.component.js.map