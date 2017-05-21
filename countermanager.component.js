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
var store_1 = require("@ngrx/store");
var CounterManagerComponent = (function () {
    function CounterManagerComponent(store) {
        this.store = store;
        this.counters = this.store.select('counterManagerReducer');
    }
    CounterManagerComponent.prototype.add = function () {
        this.store.dispatch({ type: 'ADD' });
    };
    CounterManagerComponent.prototype.increment = function (id) {
        this.store.dispatch({ type: 'INCREMENT', payload: id });
    };
    CounterManagerComponent.prototype.decrement = function (id) {
        this.store.dispatch({ type: 'DECREMENT', payload: id });
    };
    return CounterManagerComponent;
}());
CounterManagerComponent = __decorate([
    core_1.Component({
        selector: 'countermanager',
        template: "\n    <button (click)=\"add()\">Add Counter</button>\n    <br/>\n    <br/>\n    <counter *ngFor=\"let counter of counters | async\" \n             [counter]=\"counter\"\n             (increment)=\"increment($event)\"\n             (decrement)=\"decrement($event)\"></counter>\n    ",
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [store_1.Store])
], CounterManagerComponent);
exports.CounterManagerComponent = CounterManagerComponent;
//# sourceMappingURL=countermanager.component.js.map