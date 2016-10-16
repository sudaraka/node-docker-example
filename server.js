/**
 * server.js: simple HTTP server using Express
 *
 * Copyright 2016 Sudaraka Wijesinghe <sudaraka@sudaraka.org>
 *
 * This program comes with ABSOLUTELY NO WARRANTY;
 * This is free software, and you are welcome to redistribute it and/or modify
 * it under the terms of the BSD 2-clause License. See the LICENSE file for more
 * details.
 *
 */

const
  http = require('http'),
  express = require('express'),
  app = express()

app.get('/', (req, res) => {
  res.json({
    'name': process.env.APP_NAME || 'unknown'
  })
})

// app.get('/hello/:name', (req, res) => {
//   res.json({
//     'hello': req.params.name || ''
//   })
// })

http.createServer(app).listen(5000, () => console.log('Server started!'))
