// var SQLite = require('react-native-sqlite-storage')

// var db = SQLite.openDatabase({name: 'test.db', createFromLocation: 'default'}, () => {

// }, (err) => {
//     console.log('error: ', err)
// });

// db.transaction((tx) => {
//     tx.executeSql('SELECT * FROM Employees a, Departments b WHERE a.department = b.department_id', [], (tx, results) => {
//         console.log("Query completed");

//         var len = results.rows.length;
//         for (let i = 0; i < len; i++) {
//             let row = results.rows.item(i);
//             console.log(`Employee name: ${row.name}, Dept Name: ${row.deptName}`);
//         }

//     });
// });