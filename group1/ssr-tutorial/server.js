require('zone.js/dist/zone-node');
require('reflect-metadata');
const ngExpressEngine = require('@nguniversal/express-engine').ngExpressEngine;
const express = require('express');
const path = require('path');
// import {Request, Response} from 'express';
// import {enableProdMode} from '@angular/core';

const { AppServerModule } = require('./dist-server/main.bundle');
const compression = require('compression')

// enableProdMode();

const app = express();

app.engine('html', ngExpressEngine({
  bootstrap: AppServerModule
}));

app.set('view engine', 'html');

const DIST = path.resolve(process.cwd(), 'dist');
console.log(DIST);
app.set('views', DIST);

app.use(compression());

app.get('*.*', express.static(DIST));

// app.get('admin', () => {
//
// });

app.get('*', (req, res, next) => {
  res.render('index.html', {req});
});

app.listen(3000, () => {
  console.log('we are now listening on port 3000');
});

// renderModule(AppServerModule, {
//     url: '/',
//     document: '<app-root></app-root>'
// }).then(html => {
//     console.log(html);
// });
