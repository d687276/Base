
const setCookie = (req, res, cookie, value) => { 
    let params = {
        maxAge: 60 * 1000 * 24 * 7,
        expire: Date.now() + ((3600 * 1000) * 6),
        //httpOnly: true,
        //secure: true,
        samesite: true
    }
    res.cookie(cookie, value, params)
} 



const getCookie = (req, res) => {
    try {
        var cookies = {};
        req.headers && req.headers.cookie.split(';').forEach(function (cookie) {
            var parts = cookie.match(/(.*?)=(.*)$/)
            var data = decodeURIComponent(parts[2])
            cookies[parts[1].trim()] = (data || '').trim()
        })
        return cookies
    } catch (error) { 
        console.log("Cookie-Error: " + error)
        return "-"
    }
} 



module.exports = { setCookie, getCookie }