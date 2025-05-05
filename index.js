const app = require("./server")


app.listen(app.get("port"), () => { 
    console.log("Iniciando " + app.get("name") + ": " + app.get("port"))
})