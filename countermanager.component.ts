import { ChangeDetectionStrategy, NgModule, Component, Input, Output, Injectable, EventEmitter } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Observable } from "rxjs/Rx";
import { Store } from "@ngrx/store";
import { Counter } from "./counter";

@Component({
    selector: 'countermanager',
    template: `
    <button (click)="add()">Add Counter</button>
    <br/>
    <br/>
    <counter *ngFor="let counter of counters | async" 
             [counter]="counter"
             (increment)="increment($event)"
             (decrement)="decrement($event)"></counter>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterManagerComponent {
    counters: Observable<Counter[]>;

    constructor(private store: Store<Counter[]>) {
        this.counters = this.store.select('counterManagerReducer')
    }

    add() {
        this.store.dispatch({ type: 'ADD' });
    }

    increment(id: number) {
        this.store.dispatch({ type: 'INCREMENT', payload: id });
    }

    decrement(id: number) {
        this.store.dispatch({ type: 'DECREMENT', payload: id });
    }
}

