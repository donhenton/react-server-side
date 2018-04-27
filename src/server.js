import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import fetch from 'isomorphic-fetch';
import App from './app';
import template from './template';

const app = express();

app.use(express.static('dist/public'));

app.get('/', (req, res) => {
  fetch('https://api.github.com/users/gaearon/gists')
        .then(response => {
          //this is actually a promise so we need two steps to get the data
          return response.json() // a promise ??????
        }).then(gists => {
    const body = ReactDOM.renderToString(<App gists={gists} />)
    const html = template(body, JSON.stringify(gists))
    res.send(html)

  }).catch(err => {
    res.send("error found " + err)
  })

});

app.listen(3000, () => {
  console.log('Listening on port 3000')
});
