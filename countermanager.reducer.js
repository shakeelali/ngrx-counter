"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var value = 1;
var id = function () {
    return value++;
};
var incrementCounter = function (state, payload_id) {
    return state.id === payload_id
        ? Object.assign({}, state, { count: state.count + 1 })
        : state;
};
var decrementCounter = function (state, payload_id) {
    return state.id === payload_id
        ? Object.assign({}, state, { count: state.count - 1 })
        : state;
};
exports.counterManagerReducer = function (state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case 'ADD':
            return state.concat([Object.assign({}, { id: id(), count: 0 })]); // return new changed state object
        case 'REMOVE':
            return state.filter(function (counter) { return counter.id !== action.payload; }); // return new changed state object
        case 'INCREMENT':
            return state.map(function (counter) { return incrementCounter(counter, action.payload); });
        case 'DECREMENT':
            return state.map(function (counter) { return decrementCounter(counter, action.payload); });
        default:
            return state;
    }
};
//# sourceMappingURL=countermanager.reducer.js.map