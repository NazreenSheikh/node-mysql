const db = require('./mysql.js')
const getAllProducts = async (req, res) => {
  try {
    const [results, _] = await db.query('SELECT * FROM products')
    console.log(results)
    res.json(results)
  } catch (error) {
    console.log(error)
  }
}

const addProduct = async (req, res) => {
  const { pname, price } = req.body
  try {
    const [results, _] = await db.query(
      'INSERT INTO products (pname, price) VALUES (?, ?)',
      [pname, price],
    )
    console.log(results)
    res.json(results)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getAllProducts,
  addProduct,
}
