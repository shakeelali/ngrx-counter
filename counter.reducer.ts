import { Action } from "./action.interface";
import { ActionReducer } from "@ngrx/store";
import {Counter} from "./counter";

export const counterReducer: ActionReducer<Counter> = (state : Counter, action: Action) => {
    switch(action.type){
        
        case 'INCREMENT':

            if(state.id === action.payload)
                return Object.assign({}, state, {count: state.count + 1});

            return state;

        case 'DECREMENT':
            
            if(state.id === action.payload)
                return Object.assign({}, state, {count: state.count - 1});
            
            return state;

        default:
            return state;
    }
};