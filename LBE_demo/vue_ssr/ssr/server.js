const Vue = require('vue')
const express = require('express')
const server = express()
const renderer = require('vue-server-renderer').createRenderer({
  template: require('fs').readFileSync('./src/index.template.html', 'utf-8')
})

const createApp = require('./dist/main.server').default

server.use('./dist', express.static('./dist'))

server.get('*', (req, res) => {
  const context = {
    url: req.url
  }
  const app = createApp(context)

  renderer.renderToString(app, context, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error')
      return
    }
    res.end(html)
  })
})

server.listen(8080)