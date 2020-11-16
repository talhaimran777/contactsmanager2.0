import React from 'react';

import {Provider} from 'react-redux';
import {ReactReduxFirebaseProvider} from 'react-redux-firebase';

import {store} from './store/store';
import {rrfProps} from './store/store';

function app() {
    return (

        <Provider store={store}>
            <ReactReduxFirebaseProvider {...rrfProps}>
                <div>
                    <h1>Hello From Redux</h1>
                </div>
            </ReactReduxFirebaseProvider>
        </Provider>
    )
}

export default app
