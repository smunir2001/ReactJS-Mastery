smunir2001@gmail.com | ReactJS Mastery | February 13th, 2023
# Complete React Developer in 2023: Zero to Mastery
## Section 2 - React Basics
### Introduction
Creating React apps can involve a lot of files and time. Therefore, Facebook released a tool called __Create-React-App__.
* Scaffold a basic ReactJS application to get started
* Use npx/npm

__package.json__ provides developers with the necessary different libraries and packages that this application requires to work.

The __src__ folder is the entry point to the code for our React application.

The __index.js__ file is the entry point of all React applications.

Whatever is present in __App__ will be rendered to the __root div__ in __index.html__.

### Components
A component is a self-contained piece of code that returns some visual UI representation of our app.
* Combination of HTML, CSS, and JS
### Classes vs. hooks
Functional components render through their return statement of HTML/JSX block of code.

A class component do the same thing as functional components, just in a different way.

__Local state__ or __state__ is just some information that only the specific component is aware of and can manipulate.

React will only rerender a component when the object/state changes!
* Completely new object in memory... changing values of the same object does not affect rendering.
### setState()
Provide an object that you want to shallow-merge with your state object.
* Whatever values you passes me in this object, I'll update the state object with the same and newer values in the current object.
* setState() does not handle edge cases such as caring about what was initially stored in the state object
    * format of the key:value pair can be disregarded by setState() and the shallow merge
    * can easily shallow merge a string with an object or object with a string etc. --> want to make sure to match formats and types when shallow merging between states

A good rule of thumb as to when to use the __key__ attribute: Anything you use the __map()__ function inside of *render()*, or you have a list of the same JSX elements one after another, they need a key attribute (and CRA will warn you about it if you miss it).

In a Single Page Application (SPA), a request will be made to a server. The server will return the HTML, CSS, and JavaScript. However, because this is a ReacJS application, it contains JavaScript which includes HTML (JSX). Now when we specify a route to a specific page, ReactJS will automatically change displays/pages by React itself (live on the browser), without the need to communicate with the server for page-related code.
* Get the entire application JavaScript bundle by the server... instead of making separate requests for each page/change on the current page
## Lifecycle Methods
Control when you want ReactJS to run code when a component gets mounted (placed onto the page/doc).
* Only happens once throughout a component's life
* Can only be remounted when it gets unmounted (completely taken off the page/doc)
## Promises
__Appendix 1: Key Developer Concepts__
## Constructor, ComponentDidMount(), Render()
1. Constructor runs first.
    * Just initialize the state
2. Render runs second
    * Determines what to show initially
3. ComponentDidMount()
    * The moment our component is mounted, componentDidMount() gets called.
        * Fetching some JSON, state is updated (setState) --> rerender!!!

### For every HTML element, there is an equal/equivalent React element.
JSX is a syntax extension of JavaScript... JavaScript with extended functionality!

### Always filter from the original list (usually stored in the state).