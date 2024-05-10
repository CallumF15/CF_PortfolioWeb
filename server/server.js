const express = require("express");
const router = express.Router()
const cors = require('cors');
const bird = require('./bird')
const path = require('path');
const cookie = require('./cookies')
var cookieParser = require('cookie-parser')
var session = require('express-session');
var fs = require('fs');

const PORT = process.env.PORT || 5000

const app = express();
app.use(cors());

app.use(express.static(path.join(__dirname, '../myapp/src')));
app.use(express.static("public"));
app.use(express.static("src"));
//app.use('/bird', bird)

//uncomment later 
// app.use(cookieParser())
// app.use(session({
//   secret: "Shh, its a secret!",
//   resave: true, //forces session to be saved
//   saveUninitialized: false,      // Forces a session that is "uninitialized" to be saved to the store
//   cookie: {
//   },
// }));

//  app.all('/secret', (req, res, next) => {
//   console.log('Accessing the secret section ...')
//   next() // pass control to the next handler
// })


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

// app.route('/book')
//   .get((req, res) => {
//     res.send('Get a random book')
//     console.log('Get a random book');
//   })
//   .post((req, res) => {
//     res.send('Add a book')
//     console.log('Add a book');
//   })
//   .put((req, res) => {
//     res.send('Update the book')
//     console.log('Update the book');
//   })

// app.get('/about', (req, res) => {
//   console.log("abouttttttttttt");
//   res.send('about');
// })

//Server PARSE json file 
var obj, tasks;
app.get("/tasks", (err, res) => {
  fs.readFile('projects.json', 'utf8', function (err, data) {
    if (err){
      console.log("error reading file: " + err);
      throw err;
    } 
    
    obj = JSON.parse(data);
    console.log("obj: " + obj)
    //console.log("obj: " + obj[0].name)
    tasks = JSON.stringify(obj);
    console.log("json: " + tasks)
  });

  res.json(obj);
})

app.get("/message", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// create a GET route
// app.get('/*', (req, res) => {
//   console.log("hello on `'/'");

//   if (req.cookies.name = "site visited times:") {

//   }

//   if (req.session.page_views) {
//     req.session.page_views++;
//     console.log("you visited this page " + req.session.page_views + " times");
//     res.cookie('site visited times:', req.session.page_views).send('cookie set')
//   } else {
//     req.session.page_views = 1;
//     res.cookie('site visited times:', req.session.page_views).send('cookie set');
//   }

//   // // Cookies that have not been signed
//   // console.log('Cookies: ', req.cookies)

//   // // Cookies that have been signed
//   // console.log('Signed Cookies: ', req.signedCookies)

//   //let pathdirectory = ["myapp", "src"];
//   //res.sendFile(path.join(__dirname, ...pathdirectory, "App.js"));
//   /// pathdirectory = ["myapp","public"];
//   //res.status(200).sendFile(path.join(__dirname, ...pathdirectory, "index.html"));
// })

// app.get('/*', (req, res) => {
//   console.log("hello on all");
//   // update this path to match how you set up express to serve static and where your build is output to
//   res.send(res.sendFile(path.join(__dirname, 'myapp', 'public', 'index.html')));
// });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
})

module.exports = app	