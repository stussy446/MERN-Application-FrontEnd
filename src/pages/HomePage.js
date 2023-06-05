import React from 'react';
import {AiFillLinkedin, AiFillFacebook} from 'react-icons/ai';
import {MdVideogameAsset} from 'react-icons/md';

function HomePage() {
    return (
        <>
            <h1>Welcome To My Website!</h1>
            <p>This website was implemented with the full MERN Stack, which stands for MongoDB, Express, React and Node.js. These concepts and more are briefly explained below:</p>
            <article id="bothends">
                <h2>Technologies Used Throughout the Application</h2>
                <p>The key pieces of technology used throughout the application include the <b>JavaScript</b> programming language as well as <b>Node.js</b>. JavaScript is an Object-Oriented programming language
                    that is commonly used in the creation of websites and browser applications, though it has become much more flexible in recent years and a multitude of libraries allow for it to be 
                    used for other things as well. Node.js is an open-source cross-platform runtime environment for JavaScript code that can run directly in 
                    a computer process. This is important because when JavaScript originally released it was only functional within a browser, so the addition of Node allows JavaScript 
                    to also be used to write server-side applications instead of being relegated to only frontend development.
                </p>
            </article>
            <article id="frontend">
                <h2>Frontend-Focused Technologies Used</h2>
                <p>The frontend portion of the website focuses mainly on the utilization of the <b>React</b> library and the <b>Fetch API</b>, as well as <b>HTML and CSS</b> to render the actual content 
                    and design of the site. React is a very useful library for building Single Page Applications as it allows developers to build user interfaces out of
                    individual pieces of code called Components. These components can then be reused as needed throughout the application, making the component-based development approach
                    of React very modular and allows for a lot of code reusability as needed. I also used icons from the <a href='https://react-icons.github.io/react-icons'>React Icons Library </a>
                     in order to show the appropriate icons to users for things like changing an item in a collection, adding an item, etc. The fetch API provides a JavaScript interface 
                     that allows developers to make requests to other services and collect/format the responses as required, which allowed me to connect the backend of the application with the 
                     aforementioned frontend. I also leveraged <a href='https://fonts.google.com/'>Google Fonts </a>to help style the look of my site.
                </p>
            </article>
            <article id="backend">
            <h2>Backend-Focused Technologies Used</h2>
            <p>
                The backend portion of the website is where <b>MongoDB</b> and <b>Express</b> is utilized. MongoDB is a non-relational database that allows developers to store data into collections of documents
                that can then be retrieved and manipulated as needed. These database interactions are able to happen through the use of Express and <b>Mongoose</b>. Express is a Node.js web application framework that allows
                developers to build out REST API endpoints, routing systems, etc. REST stands for Representational State Transfer, and these types of APIs provide a lot of flexibility by not tying any data 
                to resources or methods so that they can be used across multiple different applications as needed. Mongoose is an Object Data Modeling library for MongoDB, which basically means it allows 
                developers to create schemas/models that they want to represent a group of data in their database, and then these models can be used to turn the 
                data from MongoDB into an object for use in the application, or an object can turn into a document to go into the database.
            </p>
            <p></p>
            <i>If interested in reading more about the technologies in the site, checkout the Topics Page!</i>
            </article>
            <article id="personal-links">
            <h2>Lets Connect!</h2>
            <p>
                If you are interested to learn more about what I do, my previous experience, and/or if I would be a good fit for a potential role you may be looking to fill, you can
                you can find more about me in the following locations:
            </p>
            <a className='socialLogos' href='https://www.linkedin.com/in/steve-rector/'><AiFillLinkedin size='50' /></a>
            <a className='socialLogos' href='https://www.facebook.com/steve.rector.39'><AiFillFacebook size='50' /></a>
            <a className='socialLogos' href='https://www.steverectorgames.com/'><MdVideogameAsset size='50' /></a>
            </article>
        </>
    );
}

export default HomePage;