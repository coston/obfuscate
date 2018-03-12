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
        Email: ${obfuscate({
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
  Email: <a href="obfuscated">looc.notsoc@olleh</a>
</p>
```

#### Human Interaction
```js
<p>
  Email: <a href="mailto:hello@coston.cool&subject=Question%20from%20the%20website&cc=friend@coston.cool">hello@coston.cool</a>
</p>
```
