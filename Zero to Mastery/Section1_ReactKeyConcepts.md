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