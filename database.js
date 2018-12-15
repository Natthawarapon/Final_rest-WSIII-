const pgp = require('pg-promise')();
var db = pgp('postgres://ahxdfxkfgsaqis:548016ebe41fd7a414af39170d5e3455aba9eab191f150bf9055d3e3f54723a8@ec2-54-243-147-162.compute-1.amazonaws.com:5432/d9iij409sspnat?ssl=true');
// Add queries here
module.exports = {
    getAllProducts,
    getProductByID,
    insertProduct,
    updateProduct,
    deleteProduct

};

function getAllProducts(req, res) {
    db.any('select * from products')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL products'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function getProductByID(req, res) {
    db.any('select * from products where product_id =' + req.params.id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved products id:' + req.params.id
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function insertProduct( req, res) {
    db.none('insert into products(product_id, title, price, created_at, tags)' +
        'values(${product_id}, ${title}, ${price}, ${created_at}, ${tags})', req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one product'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}
function updateProduct(req, res) {
    db.none('UPDATE products set product_id = ${product_id}, title = ${title}, price = ${price}, created_at = ${created_at}, tags =${tags} ' + ' where product_id =' + req.params.id,req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Updated one product'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}
function deleteProduct(req, res) {
    db.none('delete from products where product_id ='+ req.params.id , req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Delete one product'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}
