let base = require("./query");


sql = "select * from usertrans where userName = " + "'" + "陆仁家" + "'";
base.query(sql, function (err, resu) {
    console.log(resu[0].bloodPressure);
});
