'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({
    extended: true
}));

app.use(express.static('public'));

// Define global variables for the top and bottom HTML neeeded..
let htmlTop = `
<!DOCTYPE html>
<html>
<head>
<meta charset='utf-8'>
<meta http-equiv='X-UA-Compatible' content='IE=edge'>
<title>Steve Rector</title>
<meta name='viewport' content='width=device-width, initial-scale=1'>
<link rel='stylesheet' type='text/css' media='screen' href='main.css'>
<script src='main.js'></script>
</head>
<body>
<header>
<h1>Steve Rector</h1>
</header>
<nav>
<a href="index.html">Home</a>
<a href="contact.html">Contact</a>
<a href="gallery.html">Gallery</a>
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
    console.log(req);
})

