import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import {ngExpressEngine} from '@nguniversal/express-engine';
import * as express from 'express';
import * as path from 'path';
import {Request, Response} from 'express';
import {enableProdMode} from '@angular/core';

const { AppServerModule } = require('./dist-server/main.bundle');
const compression = require('compression')

enableProdMode();

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

app.get('*', (req: Request, res: Response, next) => {
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
