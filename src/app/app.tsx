// global
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import firebase from 'firebase/app';

// common
import { routes } from 'routes/routes';
import { storeContext, rootReducer } from 'store';

const firebaseConfig = {
  apiKey: 'AIzaSyA-oeA43qIcUPISPXfrB7fklzV17pMJ8e0',
  authDomain: 'admin-logs-3ffc8.firebaseapp.com',
  databaseURL: 'https://admin-logs-3ffc8.firebaseio.com',
  projectId: 'admin-logs-3ffc8',
  storageBucket: 'admin-logs-3ffc8.appspot.com',
  messagingSenderId: '1080874149450',
  appId: '1:1080874149450:web:7e21a4c52ab661eff128b3',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const App = () => {
  const store = React.useReducer(rootReducer, { auth: {} });

  return (
    <storeContext.Provider value={store}>
      <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
    </storeContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
