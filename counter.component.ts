// import { NgModule, Component, Input, Output, Injectable, EventEmitter } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

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

import { ChangeDetectionStrategy, NgModule, Component, Input, Output, Injectable, EventEmitter } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Observable } from "rxjs/Rx";
import { Store } from "@ngrx/store";
import { Counter } from "./counter";

@Component({
    selector: 'counter',
    template: `
    <div class="col-md-3">
        <div class="panel panel-default">
            <div class="panel-body">
                <button (click)="increment.emit(counter.id)" class="btn btn-success">+</button>
                <label>{{counter.count}}</label>
                <button (click)="decrement.emit(counter.id)"  class="btn btn-success">-</button>        
            </div>
        </div>
    <div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent {

    @Input()
    counter: Counter;

    @Output()
    increment = new EventEmitter();

    @Output()
    decrement = new EventEmitter();

}



