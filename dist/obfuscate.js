'use strict'

var assert = require('assert-ok')
var array = require('cast-array')
var filter = require('object-filter')
var qs = require('query-string')
var bel = require('bel')

module.exports = function obfuscate(options) {
  assert(options, 'options are required')

  var mailto = {
    email: addresses(options.email),
    cc: addresses(options.cc),
    bcc: addresses(options.bcc),
    subject: options.subject,
    body: options.body
  }

  var styles = `
    unicode-bidi: bidi-override; 
    unicode-bidi: -webkit-isolate-override; 
    unicode-bidi: -moz-isolate-override; 
    unicode-bidi: -ms-isolate-override; 
    unicode-bidi: isolate-override;
  `

  var email = mailto.email
  mailto = filter(mailto, Boolean)
  delete mailto.email

  var querystring = qs.stringify(mailto)

  var link = 'mailto:' + (email || '') + (querystring
    ? '?' + querystring
    : '')
  return bel `<a dir="rtl" style=${styles} onclick="${ function () {
    handleClick(event, link)}}" href="obfuscated">${reverse(email)}</a>`
  }

  function addresses(e) {
    return e
      ? array(e).join(',')
      : undefined
  }

  function reverse(s) {
    return s
      .split("")
      .reverse()
      .join("");
  }

  function wait(e) {
    e.preventDefault();
  }

  function handleClick(e, l) {
    e.preventDefault()
    window.location.href = l
  }