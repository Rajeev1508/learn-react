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
