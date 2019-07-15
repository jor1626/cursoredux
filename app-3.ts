import { Reducer, Action } from "./ngxr-fake/ngxr";
import { reducerContador } from "./contador/calculate.reducer";
import { incrementAction } from "./contador/calculate.actions";

class Store<T> {
    constructor( 
        private reducer: Reducer<T>, 
        private state: T
    ){

    }

    getState(){
        return this.state;
    }

    dispatch(action: Action){
        this.state = this.reducer(this.state, action);
    }
}

const store = new Store(reducerContador,  10);


store.dispatch(incrementAction)


console.log(store.getState());
