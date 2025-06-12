let sqlite = require("sqlite3")



const getMenu = async (inst, usua) => {
    const dbPath = './database.db'

    const db = new sqlite.Database(dbPath);
    //sqlTabla = "CREATE TABLE menu ( idx INTEGER, descripcion TEXT, url TEXT, nivel INTEGER, padre INTEGER, instancia INTEGER, usuario integer );"
    //db.run(sqlTabla)

    console.log("SQLITE: Conexion base de datos local exitosa")

    try {
        // Query all users from the users table
        //const menu = await db.all("SELECT * FROM menu");
        //console.log('SQLITE:', menu);
      } catch (error) {
        console.error('SQLITE: Error:', error);
      }
} 


const validateMenu = async (inst, usua) => {
    const dbPath = './database.db'

    const db = new sqlite.Database(dbPath);
    //sqlTabla = "CREATE TABLE menu ( idx INTEGER, descripcion TEXT, url TEXT, nivel INTEGER, padre INTEGER, instancia INTEGER, usuario integer );"
    //db.run(sqlTabla)

    console.log("SQLITE: Conexion base de datos local exitosa")

    try {
        // Query all users from the users table
        //const menu = await db.all("SELECT * FROM menu");
        //console.log('SQLITE:', menu);
      } catch (error) {
        console.error('SQLITE: Error:', error);
      }
}


module.exports = { getMenu, validateMenu }