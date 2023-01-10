const database = {
    ['index.html']: '<html>hello leena</html>',
};

module.exports.get = (key, callback) => {
    setTimeout(() => {
        callback(database[key]);
    }, 3000); 
};

// how to connect to oracle 

const oracldb = require('oracldb');
oracledb.outformat = oracledb.OUT_FORMAT_OBJECT;

// function always returns a promise
async function fun() {
    let con;

    try {
        con = await oracledb.getConnection( {
            user                : "hr",
            password            : "${pw}",
            connectionString    : "localhost/orcl"
        });

        const data = await con.execute(
            `SELECT * FROM TABLE `,
        );
        console.log(data.rows);
    } catch (err) {
        console.log(err);
    }
}
fun();
//  npm install ortacle
