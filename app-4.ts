
import { Store, createStore } from 'redux'
import { reducerContador } from './contador/calculate.reducer';
import { incrementAction } from './contador/calculate.actions';

const store: Store = createStore( reducerContador);

store.subscribe(()=> {
    console.log('suscribe:', store.getState());
})

store.dispatch(incrementAction);