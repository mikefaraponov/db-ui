import Express from 'express'
import {Server}  from 'http'
import logger from 'morgan'
import {json, urlencoded} from 'body-parser'
import Debug from 'debug'

const app = Express()
const debug = Debug('db:dev')
const server = Server(app)

if(process.env.NODE_ENV === 'development'){
  const webpackDevMiddleware = require("webpack-dev-middleware");
  const webpack = require("webpack");
  const compiler = webpack(require('../webpack.config'));
  app.use(webpackDevMiddleware(compiler, {stat: {colors: true}}))
}

app
  .use(logger('dev'))
  .use(json())
  .use(urlencoded({extended: false}))
  .use(Express.static(`${__dirname}/../public`))
  .use('/', async (req, res) => res.send(SPA('blanket')) )

server
  .listen(process.env.PORT || 3000, onStart)
  .on('error', onError)
  .on('listening', onListening)

function onStart(err) {
  !err && debug('Server started!')
}

function onListening() {
  const addr = server.address(),
    bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : `port ${addr.port}`
  debug('Listening on ' + bind)
}

function onError(err) {
  const {port} = err

  if (err.syscall !== 'listen') throw err

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port

  switch (err.code) {
  case 'EACCES':
    debug(bind + ' requires elevated privileges')
    process.exit(1)
    break
  case 'EADDRINUSE':
    debug(bind + ' is already in use')
    process.exit(1)
    break
  default:
    throw err
  }
}

function SPA(title){
  return `
  <!DOCTYPE html>
  <html lang="en">

  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
      <meta name="theme-color" content="#9DB4F3">
      <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Bungee+Shade">
      <title>${title}</title>
      <link rel="icon" type="image/png" href="/db.png" />
      <link rel="stylesheet" href="/bower_components/font-awesome/css/font-awesome.min.css">
      <script defer src="/db.js"></script>
  </head>

  <body>
      <div id="root"></div>
  </body>

  </html>
  `
}