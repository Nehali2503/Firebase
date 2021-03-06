import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as ServiceWorker from './ServiceWorker';
import Firebase, { FirebaseContext } from './components/Firebase';

ReactDOM.render(
<FirebaseContext.Provider value ={new Firebase()}>
    <App/>
    </FirebaseContext.Provider>,
     document.getElementById('root'),
     );
ServiceWorker.unregister();
