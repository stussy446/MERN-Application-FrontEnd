'use strict';

const express = require('express');
const nodemailer = require('nodemailer');
const products = require('./products.js').products;

const app = express();
const PORT = 3000;

app.use(express.urlencoded({
    extended: true
}));

app.use(express.static('public'));

// Define global variables for the top and bottom HTML neeeded
let htmlTop = `
<!DOCTYPE html>
<html>
<head>
<meta charset='utf-8'>
<meta http-equiv='X-UA-Compatible' content='IE=edge'>
<title>Steve Rector</title>
<meta name='viewport' content='width=device-width, initial-scale=1'>
<link rel='stylesheet' type='text/css' media='screen' href='main.css'>
</head>
<body>
<header>
<h1>Steve Rector</h1>
</header>
<nav>
<a href="index.html">Home</a>
<a href="contact.html">Contact</a>
<a href="gallery.html">Gallery</a>
<a href="order.html">Order</a>
</nav>
<main>
`

let htmlBottom = `
</article>
</section>
</main>
<footer>
<p>&copy; 2023 Steve Rector</p>
</footer>
</body>
</html>
`

app.listen(PORT, () =>{
    console.log(`Server listening on port ${PORT}`)
})

app.post("/contact", (req, res) => {
    let name = req.body["name"];
    let email = req.body["email"];
    let message = req.body["message"];
    let commStyle = req.body["commStyle"];
    let development = req.body["development"];
    let subscribe = req.body["subscribe"];

    // if subscribe returns an array then join it as a string, otherwise leave as is
    if(typeof(subscribe) == Array)
    {
        subscribe = subscribe.join(', ');
    }


    // uses nodemailer to send information from form to a test email account
    async function main(){
        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            secure:false,
            auth: {
                user: 'lilian.ward44@ethereal.email',
                pass: '1jCrs3FeKEU3g2VRM9'
            }
        });

        // sends email with user's  content provided in the form
        const info = await transporter.sendMail({
            from: `${name}, <${email}`,
            to: "lilian.ward44@ethereal.email",
            subject: "Testing test 123",
            text: `${message}`,
            html: `
            <p>${message}</p>
            <p>My preferred communication style is ${commStyle} and I am interested in speaking about ${development}.</p>
            `,
        });

        console.log("Message sent: %" + info.messageId);
    }

    main()
    .catch(e => console.log(e));
  
    res.send(`
    ${htmlTop}
    <h2>Thank You For Your Response!</h2>
        <section>
            <h3>I have received the following information:</h3>
            <article>
                <p>Your name is <strong>${name}</strong> and your email is <strong>${email}</strong>.</p>
            </article>
            <article>
                <p>Your message is <strong>${message}</strong>, I am eager to review your message further as soon as possible.</p>
            </article>
            <article>
                <p>Your preferred communication style is is <strong>${commStyle}</strong> and the type of development you would like to
                talk about is <strong>${development}</strong>.
                </p>
            </article>
            <article>
                <p>Finally, it looks like you chose <strong>${subscribe}</strong> for keeping up-to-date with my content.</p>
            </article>
        </section>
        <section>
            <h3>Thanks again for your feedback and information, I am looking forward to speaking further!</h3>
        </section>
    ${htmlBottom}
    `
)})

/**
 * Receives a product choice string and returns an object representing the chosen product's information 
 * @param {string} productChoice - choice provided by customer
 * @returns {object} chosen product's object containing all if its related information
 */
function compareUserInput(productChoice){
    for(const option of products){
        if(option.product === productChoice){
            return option;
        }
    }
}

app.post("/order", (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let address = req.body.address;
    let choice = req.body.choice;
    let quantity = req.body.quantity;
    let deliveryInstruction = req.body.delivery;
    
    let chosenProductObj = compareUserInput(choice);

    let cost = (chosenProductObj.price * parseInt(quantity)).toLocaleString("en-US", {style:"currency", currency:"USD"});

    res.send(`
    ${htmlTop}
    <h2>Thank You For Your Response!</h2>
        <section>
            <h3>You have submitted the following order information:</h3>
            <article>
                <p>Your name is <strong>${name}</strong> and your email is <strong>${email}</strong>.</p>
                <p>
                    Your delivery address is <strong>${address}</strong> and you have provided the following 
                    delivery instructions: <strong>${deliveryInstruction}</strong>
                </p>
            </article>
            <article>
                <p>You have decided to go with the <strong>${choice}</strong> and have ordered a total of <strong>${quantity}</strong>.</p>
            </article>
            <article>
                <p>
                    Given the above information, this will bring your total to <strong>${cost}</strong>, thank you for taking care of your 
                    special pet friend and please let us know if you have any questions!
                </p>
            </article>
        </section>
    ${htmlBottom}
    `
)})

