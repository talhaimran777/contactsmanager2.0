import React from 'react';

import {Provider} from 'react-redux';
import {ReactReduxFirebaseProvider} from 'react-redux-firebase';

import {store} from './store/store';
import {rrfProps} from './store/store';

// Contacts page
import Contacts from './components/contacts';
function app() {
    return (

        <Provider store={store}>
            <ReactReduxFirebaseProvider {...rrfProps}>
               <Contacts/>
            </ReactReduxFirebaseProvider>
        </Provider>
    )
}

export default app
