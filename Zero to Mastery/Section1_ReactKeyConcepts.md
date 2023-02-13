smunir2001@gmail.com | ReactJS Mastery | February 10th, 2023
# Complete React Developer in 2023: Zero to Mastery
## Section 1 - React Key Concepts
### Introduction
Before React, webpages were composed of basic HTML, CSS, and JavaScript.
* HTML displayed the text on our web pages
* CSS handled the styles
* JavaScript allowed us to add some interactivity in our website/webpage
### Submitting forms
Initially, a user would submit a form, the data would be sent to and stored in the backend (server). 
### Clicking on links
Initially, a user would click on a link, the browser would request the next/linked page from the server (backend) and display/load in the current tab.
* When a user clicks on a link, a request is sent to the backend (server) to obtain the new HTML file and new page and then send it to the front end.

All websites were run on different browsers and all these browsers were worked on by different groups of developers.
* When more and more JavaScript was required and used, developers had to consider how different browsers sometimes work differently from each other, 
### jQuery - the middle channel
Now eventually we had jQuery come out which allowed developers to easily interact with the DOM or the Document Object Model across all these different browsers.

Back then there wasn't much similarity and compatibility between different browsers, but jQuery made developers happy because it had an unified and easy API.

With this power, bigger and bigger applications were starting to form --> developers turned websites into full size applications.
* Other libraries came out to minimize .js files
### Birth of a single-page application
Traditionally, we just had HTML files for each page and every time we moved to a different page, we would request from the server the corresponding HTML, CSS, & JS files.

With more advancement, AJAX came along
* less focus on HTML, and more on JS

You only load the application code once.
* instead of us making new requests to the server where we returned a new document instead, now our applications acted more like a desktop application where we stay on the same page the entire time and the JavaScript file simply changes or updates the HTML file or the DOM to display new things.
### AngularJS became the standard way of building applications this way
Angular allowed developers to build these large applications by forming these containers that will wrap your project. 

We need to think about how we organize our code, how we manipulate data, and how that data flows through our programs.

### ReactJS developed a whole new way to build front end applications.
Became the most popular frontend tool with the most job demand across the world and being used by very large companies.
## React Concepts
### 1. Don't touch the DOM. I'll do it...
___
The imperative approach forces us to target each action/element specifically and update the DOM manually. It becomes difficult to see relationships between the evens and edge cases.

React allows for a declarative approach:
* React will handle the DOM. this is because it is a performance costly action... (2 steps):
    1. repaint - change an element and add it to the page
    2. refloat - recalculate the layout
* The programmer/developer describes and declares what the app should look like and its current state
* Resulted in less complexity, better code quality, and faster developer times
    * The idea of building web interfaces without touching the DOM: based on the state or data of the app --> just "react" to it and update the display
### 2. Build websites like lego blocks
___
The idea is to design websites like lego blocks and designed around the idea of reusable components. 
* Combine small components to build larger components (components containing other components)

Components are plain JS functions that we can write.
1. So we have the state of our app or that is any data that describes our app.
2. Components are created based on that data --> functional components can receive some sort of input or attributes which are called __props__.
3. Functional components return HTML inside JavaScript called JSX (JavaScript extended)

React logic cycle: some data about our application --> build components out of JSX --> combine together to create a final app (reusability & efficiency).
### 3. Unidirectional data flow
React will create a virtual DOM by combining the state and components using JSX.

As the state changes, all components from top to bottom will be updated (unidirectional flow) --> from top component to lowest-level component.

The key takeaway here is that by having this restriction of data only being able to move down from the state of our application all the way to the DOM.I
* If any changes or events happen that change the state, well, go back to the state and that state change trickles down to different components in one direction.
* Easier to debug code (only have to look in the place where the data exists and where the data flows through)
### 4. UI library, the rest is up to you!
React doesn't make assumptions about what technology stack you use.

ReactJS "bots" handle all the UI changes (repainting * refloating) through the main React library.
* Different React libraries exist for different uses, interactions, and functionalities

Because of this, React was able to use this concept and have developers that wrote code for webpages, now code to build desktop applications, build VR applications, and to build mobile applications.
* Cross-platform compatibility took off with React
* Library imports
### Why does React exist?
### What problem does it solve?
## Why it makes frontend development easier?
### How to be a great React developer?
Remember ReactJS is...
* Declarative
* JSX
* State
* Props
* Components
* Virtual DOM
What we need to know and do...
1. Decide on components
2. Decide the state and where it lives
3. What changes when state changes?