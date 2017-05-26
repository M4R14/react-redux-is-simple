import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {createStore, combineReducers, applyMiddleware} from "redux"
import {Provider} from "react-redux";
import logo from './logo.svg';

const initalState={
    result:15000,
    value:[]
}

const logoReducer = (state={logo:logo},action)=>{
    switch (action.type) {
        case "SET_LOGO":
            state={
                ...state,
                logo:action.playload
            }

            break;
    }
    return state;
}

const userReducer = (state={name:"mark",age:23},action)=>{
    switch (action.type) {
        case "SET_NAME":
            state={
                ...state,
                name:action.playload
            }

            break;
        case "SET_AGE":
            state={
                ...state,
                age:action.playload
            }
            break;
    }
    return state;
}

const employeeReducer=(state=initalState, action)=>{
    switch (action.type) {
        case "ADD":
            state={
                ...state,
                result:state.result += action.playload,
                value:[...state.value, action.playload]
            }
            break;
        case "SUBTRACT":
            state={
                ...state,
                result:state.result -= action.playload,
                value:[...state.value, action.playload*(-1)]
            }
            break;
    }
    return state;
}

const mylogger=(store)=>(next)=>(action)=>{
    console.log("Log Action", action);
    next(action);
}

const store = createStore(combineReducers({emp:employeeReducer,user:userReducer, layout:logoReducer}),{},applyMiddleware(mylogger));
store.subscribe(()=>{
    console.log('Update Store:', store.getState());
});

store.dispatch({
    type:"SET_NAME",
    playload:"Vachirawit"
});

// store.dispatch({
//     type:"SET_AGE",
//     playload:30
// });

// store.dispatch({
//     type:"ADD",
//     playload:5000
// })

// store.dispatch({
//     type:"SUBTRACT",
//     playload:500
// })

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
