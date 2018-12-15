const pgp = require('pg-promise')();
var db = pgp('postgres://ldhpmypdhuhmhl:3dafa54569c7d1668270ee1e368bceed03d36f2be9243c0af05b5f892d5e434c@ec2-107-21-125-209.compute-1.amazonaws.com:5432/d8ulmgf7pv5e3v?ssl=true');
// Add queries here
module.exports = {
    getAllCategories
    // getProductByID,
    // insertProduct,
    // updateProduct,
    // deleteProduct

};

function getAllCategories(req, res) {
    db.any('select * from categories')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL categories'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

// function getProductByID(req, res) {
//     db.any('select * from products where product_id =' + req.params.id)
//         .then(function (data) {
//             res.status(200)
//                 .json({
//                     status: 'success',
//                     data: data,
//                     message: 'Retrieved products id:' + req.params.id
//                 });
//         })
//         .catch(function (error) {
//             console.log('ERROR:', error)
//         })
// }

// function insertProduct( req, res) {
//     db.none('insert into products(product_id, title, price, created_at, tags)' +
//         'values(${product_id}, ${title}, ${price}, ${created_at}, ${tags})', req.body)
//         .then(function (data) {
//             res.status(200)
//                 .json({
//                     status: 'success',
//                     message: 'Inserted one product'
//                 });
//         })
//         .catch(function (error) {
//             console.log('ERROR:', error)
//         })
// }
// function updateProduct(req, res) {
//     db.none('UPDATE products set product_id = ${product_id}, title = ${title}, price = ${price}, created_at = ${created_at}, tags =${tags} ' + ' where product_id =' + req.params.id,req.body)
//         .then(function (data) {
//             res.status(200)
//                 .json({
//                     status: 'success',
//                     message: 'Updated one product'
//                 });
//         })
//         .catch(function (error) {
//             console.log('ERROR:', error)
//         })
// }
// function deleteProduct(req, res) {
//     db.none('delete from products where product_id ='+ req.params.id , req.body)
//         .then(function (data) {
//             res.status(200)
//                 .json({
//                     status: 'success',
//                     message: 'Delete one product'
//                 });
//         })
//         .catch(function (error) {
//             console.log('ERROR:', error)
//         })
// }
