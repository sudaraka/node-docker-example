/**
 * server_spec.js: test for the sample HTTP server
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
  { get } = require('axios'),
  expect = require('expect')

describe('HTTP Server', () => {
  it('should respond with APP_NAME environment variable', () => {
    return get('http://127.0.0.1:5000/')
      .then(({ data }) => {
        expect(data.name).toBe(process.env.APP_NAME)
      })
  })
})
