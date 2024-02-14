//We can creat react App using any library
1. Using node packet executer
cmd > npx create-react-app [app-name]

2. Using vite module : light weight
cmd> npm create vite@latest

//Best Practice in react
1. file name first letter to be UpperCase
2. Use .jsx extension When retun any HTML otherwise .js can be used.

// Evaluated Expression used in JSX Syntax for variables.
const UserName = Rajeev;
<h1>Learning react with {UserName}</h1>

// React Hooks
UI updation ko react control krta hai.
import hooks from react 
for ex-> import { useState } from 'react';
         const [counter, setCounter] = useState(10); // 2 things return in form of array 0->variable,1->Method