"use strict";

import Express from 'express'
import React from 'react'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import configureStore from './app/store/configureStore'
import { RouterContext, match } from 'react-router'
import routes from './app/routes';



const app = Express();
const port = 3000;

app.use('/static', Express.static('static'));

app.use((req, res) => {
    const store = configureStore();

    match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {
        if (err) {
            console.error(err);
            return res.status(500).end('Internal server error');
        }

        if (!renderProps) return res.status(404).end('Not found.');

        const InitialComponent = (
            <Provider store={store}>
                <RouterContext {...renderProps} />
            </Provider>
        );

        const initialState = store.getState();

        const componentHTML = renderToString(InitialComponent);

        const HTML = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8">
                <title>Test</title>
            </head>
            <body>
                <div id="root">${componentHTML}</div>
                    <script type="application/javascript">
                    window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
                </script>
                <script src="/static/bundle.js"></script>
            </body>
            </html>    
           `;
        res.end(HTML);
    });
});


app.listen(port, function (error) {
    if (error) {
        console.error(error)
    } else {
        console.info("==>Listening on port %s. Open	up http://localhost:%s/	in your browser.", port, port)
    }
});
