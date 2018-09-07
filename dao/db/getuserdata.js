let connection = require("./db.js");


connection.query("SELECT * from useInfo ", function (error, results,fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].username);
});
