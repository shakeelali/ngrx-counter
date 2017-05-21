import { NgModule, Component, Input, Output, Injectable, EventEmitter } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from "./app.component";
import { CounterComponent } from "./counter.component";

import { provideStore } from "@ngrx/store";

import { counterReducer } from "./counter.reducer";
import { counterManagerReducer } from "./countermanager.reducer";
import { CounterManagerComponent } from "./countermanager.component";

@NgModule({
    providers: [provideStore({ counterManagerReducer })],
    imports: [BrowserModule],
    bootstrap: [AppComponent],
    declarations: [AppComponent, CounterComponent, CounterManagerComponent]
})
export class AppModule {
}

