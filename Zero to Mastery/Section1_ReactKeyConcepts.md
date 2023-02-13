smunir2001@gmail.com | ReactJS Mastery | February 10th, 2023
# Complete React Developer in 2023: Zero to Mastery
## Section 1 - React Key Concepts
Before React, we had basic HTML, CSS, and JavaScript.
* HTML displayed the text on our web pages
* CSS, the styles
* JavaScript allows us to have some interactivity in a website

Initially, a user would submit a form, the data would be sent to and stored in the backend (server). 

Initially, a user would click on a link, the browser would request the next/linked page from the server (backend) and display/load in the current tab.
* When a user clicks on a link, a request is sent to the backend (server) to obtain the new HTML file and new page and then send it to the front end.

All websites were run on different browsers and all these browswers were worked on by different groups of developers.
* When more and more JavaScript was required and used, developers had to consider how different browsers sometimes work differently from each other, 

Now eventually we had jQuery come out which allowed developers to easily interact with the DOM or the Document Object Model across all these different browsers.

Back then there wasn't much similarity and compatibility between different browsers, but jQuery made developers happy because it had unified easy API.


With this power, bigger and bigger applications --> devlopers...

WebSites turned into full size applications...

oTher libraries came out to minimize .js files

Birth of a single-page application

Traditionally, we just had HTML files for each page and every time we moved to a different page, we would request from the server the corresponding HTML, CSS, & JS files.

With more advancement, AJAX came along
* less focus on HTML, and more on JS

You only load the application code once.
* instead of us making new requests to the server where we returned a new document instead, now our applications acted more like a desktop application where we stay on the same page the entire time and the JavaScript file simply changes or updates the HTML file or the DOM to display new things.

AngularJS became the standard way of building applications this way...
* Angular allowed developers to build these large applications by forming these coontainers that will wrap your project. 

We need to think about how we organize our code, how we manipulate data, and how that data flows through our programs.

ReactJS developed a whole new way to build front end applications.
* Became the most popular frontend tool with the most job demand across the world and being used by very large companies.

### Why does React exist?
### What problem does it solve?
## Why it makes frontend development easier?

### React Concepts
1. Don't touch the DOM. I'll do it...
    * The imperative approach forces us to target each action/element specifically and update the DOM manually. It becomes to difficl tto see relationships between the events and edge cases.
    * React allows for a declarative approach:
        * React will handle the DOM. this is because it is a performance costly action... (2 steps):
            1. repaint - change an element and add it to the page
            2. refloat - recalculate the layout
    * the programmer/developer describes and declares what the app should look like and its current state.
    * resulted in less complexity, better code quality, and faster developer times
        * idea of building web interfaces without touching the DOM: based on the state or data of the App, just "react" to it and update display.
2. Build websites like lego blocks
    * idea to design websites like lego blocks and designed around the idea of reusable components.
    * combine small components to build larger components (components containing other components)
    * components are plain JS functions that we can write
        * so we have the state of our app or that is any data that describes our app --> components are created based on that data --> can recieve some sort of input or attributes which are called props.
        * returns html inside javascript called JSX (extended javascript)
        * some data about application -> build components about of html tags that signify a component -> combine together to create final app (reusability)
3. Unidirectional data flow
    * combing state and components using JSX, React will create a virtual DOM.
    * as the state changes, all components from top to bottom will be updated (unidirectional flow) --> from top component to lowest-level component
    * The key takeaway here is that by having this restriction of data only being able to move down from the state of our application all the way to the DOM, and if any changes or events happen that change the state, well, we go back to the state and that state change trickles down to different components in one direction is a restriction on how data can move through our app.
        * easier to debug code ( only have to look in the place where the data exists and where the data flows through)
4. UI library, the rest is up to you
    * React doesn't make assumptions about what technology stack you use.
    * ReactJS "bots" handle all UI changes (replacing & refloating) though the main React library
    * Different React libraries exist for different uses, interactions, and functionalities.
    * And because of this, React was able to use this concept and have developers that wrote code for webpages, now code to build desktop applications, build VR applications, and to build mobile applications
        * cross-platform compatibility took off with React
        * library imports
### How to be a great React developer?
Remember...
* Declarative
* JSX
* State
* Props
* Components
* Virtual DOM

1. Decide on components
2. Decide the state and where it lives
3. What changes when state changes?