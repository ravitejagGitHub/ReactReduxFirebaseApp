import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';


import * as serviceWorker from './serviceWorker';
import FirebaseReduxApp from './FirebaseReduxApp/';
import rootReducer from './FirebaseReduxApp/store/reducers/rootReducer';
import fbConfig from './FirebaseReduxApp/config/fbConfig';

import './index.css';
//import App from './App';
// import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reactReduxFirebase(fbConfig, {
            attachAuthIsReady: true,
            useFirestoreForProfile: true,
            userProfile: "users"
        }),
        reduxFirestore(fbConfig)
    )
);

store.firebaseAuthIsReady.then(()=>{
    ReactDOM.render(<Provider store={store}><FirebaseReduxApp /></Provider>, document.getElementById('root'));
    serviceWorker.unregister();
})


// ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

