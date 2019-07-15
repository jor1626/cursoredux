import { Action } from './ngxr-fake/ngxr';
import { incrementAction, decrementAction, multiplicarAction, dividirAction, resetAction } from './contador/calculate.actions';

function reducer2(state = 10,  action: Action) {
    switch (action.type) {
        case 'INCREMENTAR':
            return state += 1;
        case 'DECREMENTAR':
            return state -= 1;
        case 'MULTIPLICAR':
            return state * action.payload;
        case 'DIVIDIR':
            return state / action.payload;
        case 'RESET':
            return state = 0;
        default:
            return state;
    }
}

console.log(reducer2(10, incrementAction));

console.log(reducer2(10, decrementAction));

console.log(reducer2(10, multiplicarAction));

console.log(reducer2(10, dividirAction));

console.log(reducer2(10, resetAction));
