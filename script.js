import { useAsRoot, addEvent, getId, style, styles, alertError, applyAlertStyles, alertSuccess } from 'https://limitjs.vercel.app/index.js'
const app = useAsRoot('#app');
app.get('/home', () => ({ html: '<h1>Home Page</h1>' }));
app.get('/user/:id', (params) => ({
  html: `<h1>User Profile for ID ${params.id}</h1>`
}));
app.post('/submit', () => ({ html: '<h1>Form Submitted</h1>' }));

app.goRoute('get', '/home')