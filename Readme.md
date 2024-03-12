# Learn React
## We can creat react App using any library
1. Using node packet executer
```cmd
cmd > npx create-react-app [app-name]
```

2. Using vite module : light weight
```cmd
cmd> npm create vite@latest
cmd> [project Name]
```
## Best Practice in react
1. file name first letter to be UpperCase
2. Use .jsx extension When retun any HTML otherwise .js can be used.

### Evaluated Expression used in JSX Syntax for variables.
    const UserName = Rajeev;
    Example : <h1>Learning react with {UserName}</h1>

## React Hooks
UI updation ko react control krta hai.<br/>
import hooks from react <br/>
```jsx
        import { useState } from 'react';
         const [counter, setCounter] = useState(10); 
         // 2 things return in form of array 0->variable,           1->Method
```
## React Router : enables "client side routing"
<p>In traditional websites, the browser requests a document from a web server, downloads and evaluates CSS and JavaScript assets, and renders the HTML sent from the server. When the user clicks a link, it starts the process all over again for a new page.</br>Client side routing allows your app to update the URL from a link click without making another request for another document from the server. Instead, your app can immediately render some new UI and make data requests with 'fetch' to update the page with new information.</p>

##### That is we don't use <a href> for production