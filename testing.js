const mysql = require('mysql2');
const faker = require('faker');

console.log('hello');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '1234567890',
  database: 'testing'
})
const db = pool.promise();

// function insertIntoUsers(){
//     return db.execute('insert into users(username,email,password) values(?,?,?)',
//     [faker.name.findName(),faker.internet.email(),faker.internet.password()]).then(res=>{
//         console.log(res)
//     }).catch(err=>{
//         console.log(err);
//     });
// }


// function insertIntoDealer(){
//     return db.execute('insert into dealers(dealername) values(?)',
//     [faker.name.findName()]).then(res=>{
//         console.log(res)
//     }).catch(err=>{
//         console.log(err);
//     });
// }

function insertIntoProducts(){
    return db.execute('insert into products(p_name,p_price) values(?,?)',
    [faker.commerce.productName(),faker.commerce.price()]).then(res=>{
        console.log(res)
    }).catch(err=>{
        console.log(err);
    });
    
}
insertIntoProducts();
insertIntoProducts();
insertIntoProducts();
insertIntoProducts();
insertIntoProducts();
insertIntoProducts();

setTimeout(()=>{
    process.exit(0)
},10000);







// create table users(
//     u_id int AUTO_INCREMENT,
//     username varchar(100),
//     email varchar(100),
//     password varchar(100),
//     PRIMARY KEY (u_id)    
// );

// create table dealers(
//     dealer_id int AUTO_INCREMENT,
//     dealername varchar(100),
//     PRIMARY KEY (dealer_id)
// );

// create table products(
//     p_id int AUTO_INCREMENT,
//     p_name varchar(100),
//     p_price int,
//     PRIMARY KEY (p_id)
// );

// create table orderPlaced(
//     order_p_id int AUTO_INCREMENT,
//     user_id int,
//     product_id int,
//     dealer_id int,
//     PRIMARY KEY (order_p_id),
//     FOREIGN KEY (user_id) REFERENCES users(u_id),
//     FOREIGN KEY (product_id) REFERENCES products(p_id),
//     FOREIGN KEY (dealer_id) REFERENCES dealers(dealer_id)
// );


