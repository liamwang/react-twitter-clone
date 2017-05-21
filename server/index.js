import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

import webpack from 'webpack';
import webpackConfig from '../webpack.config.dev';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import users from './routes/users';
import auth from './routes/auth';
import tweets from './routes/tweets';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Webpack configuration/hot reloading
const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));

// Set users route
app.use('/api/users', users);
// Set auth route
app.use('/api/auth', auth);
// Set tweets route
app.use('/api/tweets', tweets);

// Handle all other route requests with *
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
})

app.listen(8888, () => {
  console.log('App listening on port 8888!');
})