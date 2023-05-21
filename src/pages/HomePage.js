import React from 'react';

function HomePage() {
    return (
        <>
            <h2>Web Dev Concepts</h2>
            <nav className="homenav">
                <a href="#web-servers">Web Servers</a>
                <a href="#frontend-design">Frontend Design</a>
                <a href="#optimizing-images">Optimizing Images</a>
                <a href="#cascading-stylesheets">Cascading Stylesheets</a>
                <a href="#javascript">JavaScript</a>
            </nav>
            <article id="web-servers">
                <h3>Web Servers</h3>
                {/* Explain what index means as it relates to websites and servers  */}
                <p>
                    The <strong>index</strong> is called the designated homepage on Apache web servers, and the index.html file
                    in the root directory is called the homepage of the web application. Most web applications
                    are configured to return the index file whenever a GET request is received with only a "/". 
                </p> 
                {/* <!--Explain what you see in the browser's Web Dev/Inspector tools. What is different about the file's details on the web server */}
                {/* vs the local computer?--> */}
                <p>
                    I navigated to the <strong>Network tab</strong> to view this information by opening each version (web and local) in Google Chrome, pressing CTRL + SHIFT + I (the shortcut
                    for Windows to open the  web console), and then pressing CTRL + R to refresh the data in the Network tab. At that point, I was able to click into the
                    loaded files and see the related information (Status code, Request Method, Response-Headers, Request-Headers, etc.).
                    The first difference I noticed between the web server and local computer was that in the web server's network tab, the file is referred to as
                    a1-rectors/, vs on the local computer it is referred to as index.html. The next difference noticed was the web server's request URL's <strong>protocol</strong>
                    is HTTPS, vs the local computer protocol being file. The web server tab also has a lot more <strong>Response Headers</strong> (including Connection, Content Encoding, etc.)
                    and <strong>Request Headers</strong> (including Accept-Encoding, Cookie, etc.) than the local computer tab. As a last note, both the server and computer had 200 
                    <strong> status codes</strong>.
                </p>
                {/* <!--Explain why the favicon.ico file has a status 200 but the main.css and main.js files do not--> */}
                <p>
                    The favicon.ico file returns a 200 status because the resource was successfully found and retrieved in the web.engr.oregonstate.edu server.
                    The main.css and main.js files instead return a 404 Not Found status, because those resources were not found in the aforementioned
                    server.
                </p>
                {/* <!--Explain the parts of the URL to your web file. What are the scheme, subdomain, host domain, and resources?--> */}
                <p>
                    The <strong>scheme (protocol)</strong> of my web file is <strong>HTTPS</strong>, signifying the data transferred is encrypted. The <strong>subdomains</strong>
                    of my web file are web and engr (web.engr.) and the <strong>host domain</strong> is oregonstate.edu. The <strong>resource</strong> specified for my web file 
                    is a1-rectors/, which as expected  defaults to retrieve the index.html file from the a1-rectors location in the web server.
                </p>
            </article>
            <article id="frontend-design">
                <h3>Frontend Design</h3>
                    <p>
                        {/* <!--Explain the concept of frontend design--> */}
                        The core concept of <strong>frontend design</strong> is about creating the optimal experience for users. This concept includes components such as the visual
                        design of the page, the <strong>GUI (graphical user-interface)</strong> and the overall interactive experience that the user has. With regard to the specifics 
                        pertaining to visual design, it requires things like a consistent color scheme, font, illustration scheme, etc., as well as navigation 
                        systems that make logical sense for the user. Frontend design trends tend to change frequently, so it is important for frontend developers
                        to stay on top of the newest trends as they surface.
                    </p>
                    {/* <!--Create a definition list explaining the five "E"s of usability--> */}
                    <dl>
                        <dt><strong>Effective</strong></dt>
                        <dd>Helps users meet their goals with accurate results.</dd>
                        <dt><strong>Efficient</strong></dt>
                        <dd>Users can perform tasks with the minimal number of steps and get results quickly.</dd>
                        <dt><strong>Easy to navigate</strong></dt>
                        <dd>Users immediately know how to locate their goal by clicking/searching, and remember how to do it again the next time
                            they visit the page. This is especially significant for users that have never used the page before.
                        </dd>
                        <dt><strong>Error-free</strong></dt>
                        <dd>Users do not run into roadblocks for their specific needs. This avoids accessibility and availability issues.</dd>
                        <dt><strong>Enjoyable to use (engaging)</strong></dt>
                        <dd>The needs of the intended audience are met in content and design, and they are planning to come back to the page thanks
                            to the overall positive experience.
                        </dd>
                    </dl>
                    {/* <!--Explain the purpose of page layout tags--> */}
                    <p>
                        The main purpose of <strong>page layout tags</strong> (such as header, nav, main, etc.) is to section off and structure the flow of content on a web 
                        page. Page layout tags are very focused on organization rather than styling. For example, most page layout tags are displayed 
                        by browsers with a newline before and after the element, but beyond that it is up to the developer to use CSS to further style them.
                        Page layout blocks also help machines (including search engine robots, screen readers, etc.) to accurately understand which area of 
                        a web page contains which components.
                    </p>
                    {/* <!--Explain how anchors link content from page to page, and differentiate between text anchors and navigation--> */}
                    <p>
                        <strong>Anchors</strong> link content by describing the content between the opening and closing anchor tags (the description itself is the link), and 
                        specifying the URL that the link will take the user to in a <strong>href</strong> attribute within the opening anchor tag. Anchors can be used to
                        link from one page to another, and they can also be used to link to a specific location within the document it is a part of. This is
                        done by adding an <strong>id</strong> attribute to the element the developer wants to link to, and then adding the value of the id attribute at the end 
                        of the URL specified in the anchor's href (example.html#examplelocation). The conceptual difference between <strong>text anchors</strong> and 
                        <strong>navigational anchors</strong> is that anchor tags typically link to sections within the same file, while navigational anchors specifically link 
                        externally to other files. Navigational anchors are also children of the <strong>nav</strong> tag and are typically displayed as buttons, whereas 
                        non-navigational anchors are typically displayed as text links.
                    </p>
            </article>
            <article id="optimizing-images">
                <h3>Optimizing Images</h3>
                    <p>
                        {/* <!--What are the 6 major specifiations of images for the web and why?--> */}
                        The first image specification is having a <strong>descriptive file name</strong>, which improves search engine optimization. A descriptive but concise file name will help 
                        search engine bots correctly categorize the image for users who may be searching for related images. The second specification is having a <strong>small file size</strong>,
                        which helps in achieving faster load times. Lossy compression will reduce the file size the most, but will result in pixelation, while lossless compression
                        does not cause pixelation but also does not compress the image has much as lossy compression. The third specification is having <strong>exact dimensions</strong>, for 
                        example cropping and reducing image sizes to fit the dimensions of your web page. Like smaller file sizes, this also helps reduce load times. The fourth 
                        specification is having the <strong>correct file format</strong> (.JPG for online photos, .GIF or 9-bit PNG for line-art, etc.) which will ensure the image displays as intended.
                        The fifth specification is <strong>reduced resolution</strong>, which involves providing multiple image sizes so the image can display well regardless of the monitor's ppi. The 
                        sixth (and final) specification is having the correct <strong>color mode</strong> (RGB for .PNG, .JPG, etc. and Indexed for.GIF) which help optimize images and ensure they appear
                        consistently across different types of media.
                    </p>
                    <p>
                        {/* <!--Which file formats are most appropriate for photos and for line art, and why?--> */}
                        The <strong>.JPG and .WebP</strong> file formats are most appropriate for photos because they are able to compress down to smaller file sizes while remaining rectangular. These 
                        formats are designed to store high-quality digital photos efficiently, making them easier to share on the web. The <strong>.GIF and 8-bit .PNG</strong> file formats are most 
                        appropriate for line art. For the .GIF format, this is because line art can take advantage of the format's lossless compression in order to preserve uniform color
                        with well-defined edges. For the 8-bit .PNG format, this is because they can be place over any variety of file without distortion, and will have a smaller file size.
                        The reasoning for this is because 8-bit can store 256 possible colors, vs something like a 24-bit image being able to store over 16 million colors 
                        (which increases the size).
                    </p>
            </article>
            <article id="cascading-stylesheets">
                <h3>Cascading Stylesheets</h3>
                    <p>
                        {/* <!--What are the main reasons to icorporate stylesheets in websites and apps?--> */}
                        The key reason to incorporate <strong>stylesheets</strong> into websites and apps is that using a style sheet allows the developer to redefine how the structure, content, and components 
                        in the page should look and behave. This flexibility that stylesheets provides is important because it empowers the developer to improve important aspects of the page, 
                        including readability, legibility, adhering to specific brand requirements, and more. 
                    </p>
                    <p>
                        {/* <!--What are the 5 ways to incorporate styles, and why?--> */}
                        The first (and most common) way to incorporate styles is through one or more <strong>external files</strong> that contain CSS rules (main.css for example in this assignment). This method 
                        is powerful because a developer can link to these stylesheets in the head of the website and provide styles to all pages of the website that link to the stylesheet. It is 
                        also possible to link multiple stylesheets for modularity as needed, and other stylesheets can be imported in as well. Externally linked stylesheets are usually the most 
                        efficient and preferred method for handling styling. The second way is by <strong>embedding styling</strong> within a &lt;style&gt; tag, which allows the developer to implement some styling 
                        directly within a block of the HTML file. The third way is by <strong>styling inline</strong> within an element using attributes and values, which allows the developer to 
                        add styling rules within elements of the HTML file that already exist (for example, styling a h1 tag from within the tag). The fourth way is through <strong>JavaScript template 
                        literals</strong>, which allow for multi-line strings and string interpolation as needed. The fifth (and final) way is through <strong>manipulation of the Document Object Model</strong> with regular 
                        JavaScript. This allows for dynamic styling based on whatever logic is provided in the JavaScript code (for example, potentially turning a specific element a different color
                        depending on if the user left-clicks or right-clicks on the element).
                    </p>
            </article>
            <article id="javascript">
                <h3>JavaScript</h3>
                    <p>
                        {/* <!--What are the main JavaScript data types?--> */}
                        The first data type is a <strong>number</strong>, which is a double precision floating point number. The second data type is a <strong>boolean</strong> value, which can be either true or false. The third data 
                        type is a <strong>string</strong>, which is enclosed with either double quotes or single quotes. In JavaScript, a developer can also use backticks to use a Template Literal with strings in order to evaluate 
                        expressions inside the template literal. The fourth data type is a <strong>symbol</strong>, which is a built-in object whose constructor returns a symbol value. The fifth type is the special values 
                        <strong>undefined and null</strong>, which both indicate the absence of a value. The sixth (and final) type is an <strong>object</strong>, which is a set of name-value pairs (also called properties).
                    </p>
                    <p>
                        {/* <!--How are objects, arrays, and JSON used?--> */}
                        <strong>Objects</strong> are mainly used in CRUD operations (Create Read Update Delete) which developers can use to view/modify properties inside of objects. Developers can also get the names (keys) of all properties of an
                        object by using the Object.keys() method. An example would be having several objects containing a person's name, birthday, and favorite food, which then can be used in a multitude of ways to show that 
                        information on a website, in logic to match user inputs, etc. <strong>Arrays</strong> are objects whose properties are strings '0', '1', '2', etc., and they are typically used to iterate through a list of elements using loops.
                        An example would be an array containing the names of all students, which you could then iterate through with a loop to print all the names to the console. <strong>JSON (JavaScript Object Notation)</strong> is used for
                        exchanging data between applications in a programming language independent way. An example would be turning JSON into a string using JSON.stringify(), sending that data over to a separate application, and then
                        using something like JSON.parse() in that application to create an object representation of that received string for use in that application.
                    </p>
                    <p>
                        {/* <!--How are conditionals and loops used?--> */}
                        <strong>Conditionals</strong> are used to evaluate expressions that result in a boolean value (true or false). An example would be an expression such as 1 === 1, which would result in a true boolean value because it is a true 
                        statement that 1 is equal to 1. Developers can use if/if-then-else conditionals, switch statements, or conditional operators to evaluate expressions. In JavaScript, there are strict equality operators (===, !==) as well as 
                        loose equality operators (==, !=), and it is always recommended to use strict operators in order to help avoid confusion from JavaScript's automatic conversion. For example, with a loose equality operator, something like '7' == 7 would 
                        incorrectly result in a true boolean result because the values are compared using a common data type with loose equality operators. <strong>Loops</strong> are used to iterate through a collection of elements in data types like arrays, objects, etc. 
                        Developers can use while loops, do while loops, for loops, for of loops, or for in loops (specifically to iterate over the properties of an object). Loops are very useful for a wide range of tasks, including looping through a collection of data 
                        for an element that matches a provided value, sorting data in a certain way, creating a different collection of data based on elements that match a provided criterion, and much more.
                    </p>
                    <p>
                        {/* <!--What is object-oriented programming?--> */}
                        <strong>Object-Oriented-Programming</strong> is a development model that organizes software around objects, rather than functional programming's model of mainly focusing on functions and logic. In Object-Oriented-Programming, an object is expected 
                        to have an identity, state, and behavior. Having an identity means that each object has its own unique and distinct identity, having a state means having its own values in its properties, and having a behavior can be done by adding properties 
                        whose values are functions. The modern method of OOP in JavaScript is to define classes using the class keyword, and to use those classes (and their constructors), to create unique instances of the class for use in a developer's scripts.
                    </p>
                    <p>
                        {/* <!--What is functional programming?--> */}
                        <strong>Functional programming</strong> is an approach to development that focuses on using functions to create maintainable software, rather than object-oriented-programming's approach of utilizing objects. In JavaScript, functions are first-class values, meaning 
                        we can assign functions to variables, define functions that receive other functions as arguments, and define functions that return functions. This allows for some powerful and commonly used techniques in JavaScript, including higher-order functions
                        (a function that receives another function), function expressions (a function that returns a function), closures to hide private information as needed, anonymous functions, etc.
                    </p>
            </article>
         </>
    );
}

export default HomePage;