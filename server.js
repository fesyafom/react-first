"use strict";

import Express from 'express'
import React from 'react'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import configureStore from './app/store/configureStore'
import { match } from 'react-router'
import routes from './app/routes';
import serialize from 'serialize-javascript';
import { ReduxAsyncConnect, loadOnServer } from 'redux-connect'



const app = Express();
const port = 6001;

app.use('/static', Express.static('static'));

app.use((req, res) => {
    const store = configureStore();

    match({ routes, location: req.url }, (err, redirect, renderProps) => {
        loadOnServer({ ...renderProps, store }).then(() => {
            const appHTML = renderToString(
                <Provider store={store} key="provider">
                    <ReduxAsyncConnect {...renderProps} />
                </Provider>
            );
            const html = createPage(appHTML, store);
            res.send(html)
        })
    })
});

function createPage(html, store) {
    return `
    <!doctype html>
    <html>
        <head>
                <meta charset="utf-8">
                <link rel="shortcut icon" href="/static/logo.png">
                <title>Redux test</title>
                <link rel="stylesheet" href="/static/styles.css">
            </head>
      <body>
        <div id="root">${html}</div>
   
        <script> window.__data=${serialize(store.getState())}</script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
  `
}


app.listen(port, function (error) {
    if (error) {
        console.error(error)
    } else {
        console.info("==>Listening on port %s. Open	up http://localhost:%s/	in your browser.", port, port)
    }
});
