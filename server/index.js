import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

import webpack from 'webpack';
import webpackConfig from '../webpack.config.dev';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import users from './routes/users';

const app = express();

app.use(bodyParser.json());
// Set users route
app.use('/api/users', users);

// Webpack configuration/hot reloading
const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));

// Handle all requests with *
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
})

app.listen(8888, () => {
  console.log('App listening on port 8888!');
})