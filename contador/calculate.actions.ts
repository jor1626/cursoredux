import { Action } from "../ngxr-fake/ngxr";

//Hacemos el action

export const incrementAction: Action = {
    type: 'INCREMENTAR'
}

export const decrementAction: Action = {
    type: 'DECREMENTAR'
}

export const multiplicarAction: Action = {
    type: 'MULTIPLICAR',
    payload: 2
}

export const dividirAction: Action = {
    type: 'DIVIDIR',
    payload: 2
}

export const resetAction: Action = {
    type: 'RESET'
}