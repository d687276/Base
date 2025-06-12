const express = require("express")
const dotenv = require('dotenv')
const jwt = require("jsonwebtoken")
const bodyParser = require("body-parser")
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const ejs = require('ejs')
const path = require('path')
var genuuid = require('uuid');
const session = require('express-session');

const app = express()


app.use("/temp", express.static(path.join(__dirname, "/files/temp/")))
app.use("/upload", express.static(path.join(__dirname, "/files/upload/")))
app.use("/docs", express.static(path.join(__dirname, "/files/docs/")))
app.use("/photos", express.static(path.join(__dirname, "/files/photos/")))
app.use("/prefact", express.static(path.join(__dirname, "/files/prefacturas/")))
app.use("/public", express.static(path.join(__dirname, "/public/")))


morgan.token('host', function(req, res) {
  return req.hostname;
  });

  
app.use(cookieParser());
app.set('view engine', 'ejs');
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan(':method :host :status :res[content-length] - :response-time ms'))



const config = require("./config")
const isAuth = require("./middelware/auth")


app.set("port", config.app.port)
app.set("name", config.app.name)
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/views/"))
app.set("developer", config.app.developer)



app.use(session(
  { name:'SessionCookie',
    genid: function(req) {
      console.log('session id created');
      return genuuid.v4
    }, // use UUIDs for session IDs
    secret: 'Shsh!Secret!Drako!Maya!Cami!Yoko!',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, expires:60000 }
  }));


app.use("", require("./routes/auth/auth.routes"))
app.use("/dashboard", isAuth.isAuth, require("./routes/dashboard/dashboard.routes"))
app.use("/seguridad", isAuth.isAuth, require("./routes/seguridad/seguirdad.routes"))

app.use("/api/sistema", require("./routes/sistema/sistema.api.routes"))

app.get("*", (req, res) => {
  res.render("404/404")
})


module.exports = app



