# obfuscate
An intelligent function to obfuscate any contact link

## Why
The world needs obfuscated links that display the link in a friendly way.

## Installation
```bash
npm install --save react-obfuscate
```

### Usage
```js
var obfuscate = require('obfuscate')

...

return html`
    <p>
        ${obfuscate({
            email:'hello@coston.cool', 
            subject:'Question from the website', 
            cc:'friend@coston.cool'
        })}
    </p>
  `
```

### Output
#### Robot Interaction
```html
<p>
  Phone: <a href="obfuscated" style="direction: rtl; unicode-bidi: bidi-override;">4321-454-502</a><br>
  Email: <a href="obfuscated" style="direction: rtl; unicode-bidi: bidi-override;">looc.notsoc@olleh</a>
</p>
```

#### Human Interaction
```js
<p>
  Phone: <a href="tel:205-454-1234">205-454-1234</a><br>
  Email: <a href="mailto:hello@coston.cool&subject=Question%20from%20the%20website&cc=friend@coston.cool">hello@coston.cool</a>
</p>
```