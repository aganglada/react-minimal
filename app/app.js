import React from 'react';
import ReactDOM from 'react-dom';

import Home from 'views/home/home';

import Header from 'components/header/header';

const renderApp = () => {
    ReactDOM.render((
        <article id="🛳">
            <Header title="Hello World" />
            <Home />
        </article>
    ), document.getElementById('root'));
};

renderApp();

if (module.hot) {
    module.hot.accept('views/home/home', renderApp);
}

if (process.env.NODE_ENV === 'production') {
    const runtime = require('offline-plugin/runtime');

    runtime.install({
        onUpdateReady: () => {
            // Tells to new SW to take control immediately
            runtime.applyUpdate();
        },
        onUpdated: () => {
            // Reload the webpage to load into the new version
            window.location.reload();
        },
    });
}
