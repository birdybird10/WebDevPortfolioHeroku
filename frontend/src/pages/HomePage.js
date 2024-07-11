import React from "react";

function HomePage(){
    return(
        <>
        <h2>Portfolio Home Page</h2>
        <article>
            <p>
                I am currently working hard on earning my BS in Computer Science from 
                Oregon State University. 
                Someday I hope to become a software developer or a full-stack developer. 
                I enjoy working with React and am interested in developing more web 
                applications.
            </p>
            <p>The following technologies are employed in this web application:</p>
                <dl>
                    <dt>MongoDB/Mongoose:</dt>
                    <dd>MongoDB is a database management system, meaning it manages a database 
                        we create. MongoDB allows us, in our web applications, to implement CRUD on our 
                        database. Depending on the permissions we give, different users can access our
                         database and perform CRUD operations. MongoDB is document-oriented, so our data
                          gets stored as a JSON document, and similar documents are grouped together in a 
                          collection. Unlike relational database management systems, MongoDB does not use SQL.
                           Mongoose is a JavaScript library that allows us to map objects in our web application
                            to documents in our database and vice versa. Mongoose corresponds to our “model” 
                            layer in the Model-View-Controller pattern. We can create a schema and model in
                             our app, which specifies what a document in a particular collection will look like. 
                             In this application, I created a “Recipes” MongoDB collection. In my backend folder, 
                             I define a “recipes” model and use Mongoose to access this database and perform CRUD on it.</dd>
                    <dt>Express:</dt>
                    <dd>Express is a framework that helps us build a Node application. Express provides us 
                        with APIs that allow us to get, post, and delete data using specific ports and routes. We 
                        can also use apply middleware on our routes, handling the request in a particular way. My 
                        app works by Express receiving requests from Node’s HTTP server and then handling those 
                        requests (potentially using middleware) and sending back responses to Node’s HTTP server. 
                        In my backend folder, I have a “recipes-controller” file, which defines all the various routes 
                        for client requests and calls the “recipes” model’s functions, forming a connection between the 
                        “view” and the “model” of my app.</dd>
                    <dt>React:</dt>
                    <dd>React is a higher-level framework that helps us build the frontend part of our web application. 
                        Everything in React is based on creating individual components and nesting those components 
                        however we wish. For example, in this app I have smaller components, like a single row for 
                        information on a person, that get used in other components, like a page that renders a table 
                        with rows of staff members. React will organize our components into a tree that gets mapped 
                        to the DOM. This means that we don’t have to bother with manipulating the DOM tree ourselves. 
                        When we want to update our page, we do so by using state variables instead of changing the HTML. 
                        For example, in my “AddRecipePage,” I use state to save whatever new information the user is 
                        typing in to create a new recipe. We use React for creating Single Page Applications, which 
                        means that we only send our app’s HTML, CSS, and JavaScript once to the browser. The user 
                        interacting with our application might feel they are navigating to a new page, when in 
                        reality, the DOM is just being manipulated with JavaScript. </dd>
                    <dt>Node:</dt>
                    <dd>Node.js is a runtime environment that uses JavaScript and helps us to build web applications.
                         It is how I am able to write and run the server-side of this web application. Within Node.js, 
                         we have access to an extensive library of JavaScript modules that help us implement different 
                         criteria for our application. We can install different packages and manage them using “npm” 
                         commands. In this app, some of the packages I use are “react”, “nodemon”, “express”, “mongoose”, 
                         “dotenv”, and “rest.”</dd>
                    <dt>JavaScript:</dt>
                    <dd>JavaScript is a programming language that is used to write our web application’s client-side code. 
                        We can build an app using HTML and CSS, but without JavaScript, the app can only display static content. 
                        JavaScript, used in both the backend and in the React frontend, is what allows this web application to 
                        dynamically update content, enabling the user to interact with the various webpages. </dd>
                    <dt>HTML:</dt>
                    <dd>HTML stands for HyperText Markup Language and is how we structure a page in our web application. 
                        It is the building block on top of which we can apply styles using CSS and allow for interaction 
                        using JavaScript. An HTML document consists of various elements, which are enclosed in individual
                         tags. Because this app uses React, the HTML elements exist in the return() block of the components 
                         I create and export. Many of my elements have attributes that help specify the element itself. 
                         These attributes are referenced in a CSS file for styling purposes. </dd>
                    <dt>CSS:</dt>
                    <dd>CSS stands for Cascading Style Sheets and is how we apply different styles to our HTML elements. 
                        A CSS file contains various selectors with properties and values that correspond with the element 
                        name from an HTML file. We can incorporate our styles in different ways, but the most common approach 
                        is to create an externally linked .CSS file so that our styles are separated from our HTML document. 
                        This is the approach I have used in my web application, as my styles are all contained in my App.css 
                        file. I gave many of my HTML elements class and ID attributes, which reference the particular class 
                        or ID in a selector in my App.css file. </dd>
                    <dt>Asynchronous Programming:</dt>
                    <dd>Asynchronous programming is a feature in JavaScript used for server-side and client-side programs. 
                        We can write asynchronous functions, which are non-blocking, meaning that the following line of code 
                        can be executed without having to wait for the function to finish running. We access the results of 
                        an asynchronous function with callback functions or by implementing the keywords “await” and “async.” 
                        An asynchronous function will return a Promise object, which gets either fulfilled or rejected. This 
                        promise can be accessed using .then() or with await/async. The await keyword will wait for a promise 
                        to be settled, but it can only be used in a function that has been declared as async. This web 
                        application uses asynchronous programming in both the backend and frontend. In the backend, the 
                        “recipes-controller.mjs” file uses .then() and .catch() with the various “recipes” functions and 
                        will return a response based on if the promise has been fulfilled or rejected. In the frontend, my 
                        pages to add and edit a recipe use asynchronous functions to fetch the necessary URL and submit a 
                        POST or PUT request. I save the promise to a response variable and display a message corresponding 
                        to the status of the response.</dd>
                    <dt>DOM:</dt>
                    <dd>DOM stands for Document Object Model and is the representation of the structure of a web page. This 
                        representation consists of a tree of nodes corresponding to our app’s HTML structure. A DOM tree’s 
                        nodes have parent-child relationships based on how our HTML elements are nested within one another. 
                        Because this web application uses React, I do not have to manipulate the DOM tree myself. Instead,
                         React organizes my components into a tree that gets mapped to the DOM. </dd>
                    <dt>REST API:</dt>
                    <dd>A REST API follows the guidelines of the REST architecture. It uses HTTP requests to perform CRUD 
                        operations. In this web application, our API follows REST guidelines, performing CRUD operations 
                        on the MongoDB “recipes” collection using the POST, GET, PUT, and DELETE HTTP methods. Our server 
                        manages the “recipes” collection and exposes these collections using unique URLs. Every HTTP 
                        request occurs in isolation, as the server is stateless.</dd>
                </dl>
            
        </article>
        
        </>
    )
}

export default HomePage;