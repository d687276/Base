const cookie = require("../helpers/cookies.helper")


function isAuth(req, res, next) {
    if (cookie.getCookie(req, res)["session_status"] === "OK") {
        next()
    } else {
        res.redirect("/logout")
    }
}


module.exports = { isAuth }