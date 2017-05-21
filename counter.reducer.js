"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.counterReducer = function (state, action) {
    switch (action.type) {
        case 'INCREMENT':
            if (state.id === action.payload)
                return Object.assign({}, state, { count: state.count + 1 });
            return state;
        case 'DECREMENT':
            if (state.id === action.payload)
                return Object.assign({}, state, { count: state.count - 1 });
            return state;
        default:
            return state;
    }
};
//# sourceMappingURL=counter.reducer.js.map