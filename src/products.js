const mysql = require('mysql2'); 

const connection = mysql.createConnection({
  // see credentials file
});

// const query = `SELECT * FROM Products`;

// connection.query(query, (err, results, fields) => {

//     if(err){
//         console.log(err)
//     }

//     console.log(results)

// });

const getAllProducts = async () => {
    const query = `SELECT * FROM Products`;

    const [results, fields] = await connection.promise().query(query)

    // const res = await connection.promise().query(query)
    // const results = res[0]
    // const fields = res[1]

    console.log(results);

    return results;

} 

const createProduct = async (product) => {

    const insertQuery = `INSERT INTO Products (Description, SKU, UserId)
    VALUES ('${product.description}', '${product.sku}', ${product.userId})`

    const [results, fields] = await connection.promise().query(insertQuery);

    console.log(results);

    return results;

}
createProduct({
    description: "Darie new Product",
    sku: "Darie1234",
    userId: 1
});

getAllProducts()

connection.end();