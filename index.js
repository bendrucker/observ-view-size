'use strict'

var Observ = require('observ')
var getSize = require('view-size')
var window = require('global/window')

var size = Observ(getSize())
module.exports = size

if (window.addEventListener) {
  window.addEventListener('resize', onResize)
  onResize()
}

function onResize () {
  size.set(getSize())
}
