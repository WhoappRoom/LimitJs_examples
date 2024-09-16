# LimitJs

LimitJs is a lightweight JavaScript framework designed for easy DOM manipulation, event handling, and styling

## importing 

```javaScript
  import { useAsRoot, addEvent, style, styles, hover, getId, alertSuccess, alertError, applyAlertStyles } from "ttps://limitjs.vercel.app/index.js"
 ```

## Usage


 Create element single or group elements 
```javaScript
import { createElements, getId } from 'https://limitjs.vercel.app/index.js';
const app = useAsRoot("#app");
// Groups elements
createElements({
  html: '<div><h1>Welcome<h1></div>'
}, { once: true });

// Single element
app.createElement('h1').text('Hello World').append();
```

## RequestAccess

```javaScript
import { RequesAccess } from 'https://limitjs.vercel.app/index.js';
const access = RequesAccess().only(['querySelector']);
const myElement = access.querySelector('#myElement');
```

## addEvent

```javaScript
import { getId, addEvent } from 'https://limitjs.vercel.app/index.js';
addEvent(getId('myButton'), 'click', () => {
  console.log('Button clicked!');
});
```

## styleing elements 

```javaScript
import { style, styles } from 'https://limitjs.vercel.app/index.js';
style(getId('myDiv'), {
  color: 'blue',
  backgroundColor: 'lightgray'
});

styles({
  '.greeting': {
    fontSize: '20px',
    padding: '10px'
  }
});
```
## Display alerts

```javaScript
import { alertSuccess, alertError, applyAlertStyles } from 'https://limitjs.vercel.app/index.js';
alertSuccess({
  title: 'Success!',
  text: 'Your action was successful.'
});

alertError({
  title: 'Error!',
  text: 'Something went wrong.'
});

applyAlertStyles();
```

## Routing 

```javaScript
import { useAsRoot } from 'https://limitjs.vercel.app/index.js';
const app = useAsRoot('#app');

app.get('/', () => {
  return { html: <h1>Welcome to the Home Page</h1>
  <a href="/about">About</a>
  };
});

app.get('/about', () => {
  return { html: '<h2>About</h2><br><a href="/">Home</a>' };
});

// Navigate to a route
app.goRoute('get', '/');

```
