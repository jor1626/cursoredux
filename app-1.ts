//Creamos el action

interface Action {
    type: string,
    payload?: any
}

//Utilizamos el reducer

function reducer(state = 10,  action: Action) {
    switch (action.type) {
        case 'INCREMENTAR':
            return state += 1;
        case 'DECREMENTAR':
            return state -= 1;
        case 'MULTIPLICAR':
            return state * action.payload;
        case 'DIVIDIR':
            return state / action.payload;
        default:
            return state;
    }
}

//Hacemos el action

const incrementAction: Action = {
    type: 'INCREMENTAR'
}

const decrementAction: Action = {
    type: 'DECREMENTAR'
}

const multiplicarAction: Action = {
    type: 'MULTIPLICAR',
    payload: 2
}

const dividirrAction: Action = {
    type: 'DIVIDIR',
    payload: 2
}


//Utilizamos el reducer

console.log(reducer(10, incrementAction));

console.log(reducer(10, decrementAction));

console.log(reducer(10, multiplicarAction));

console.log(reducer(10, dividirrAction));



