import assert from 'assert-ok'
import array from 'cast-array'
import filter from 'object-filter'
import qs from 'query-string'
import bel from 'bel'

export default function obfuscate(options) {
  assert(options, 'options are required')

  let mailto = {
    email: addresses(options.email),
    cc: addresses(options.cc),
    bcc: addresses(options.bcc),
    subject: options.subject,
    body: options.body,
  }

  const styles = `
    unicode-bidi: bidi-override; 
    unicode-bidi: -webkit-isolate-override; 
    unicode-bidi: -moz-isolate-override; 
    unicode-bidi: -ms-isolate-override; 
    unicode-bidi: isolate-override;
  `

  const email = mailto.email
  mailto = filter(mailto, Boolean)
  delete mailto.email

  const querystring = qs.stringify(mailto)

  const link = `mailto:${email || ''}${querystring ? '?' + querystring : ''}`
  return bel`<a dir="rtl" style=${styles} onclick="${() => {
    handleClick(event, link)
  }}" href="obfuscated">${reverse(email)}</a>`
}

function addresses(e) {
  return e ? array(e).join(',') : undefined
}

function reverse(s) {
  return s
    .split('')
    .reverse()
    .join('')
}

function wait(e) {
  e.preventDefault()
}

function handleClick(e, l) {
  e.preventDefault()
  window.location.href = l
}
