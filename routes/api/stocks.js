const express = require('express')
const router = express.Router()
const stockCtrl = require('../../controllers/api/stocks')

// Index 
router.get('/', stockCtrl.indexComplete, stockCtrl.jsonStocks)
// Create
router.post('/', stockCtrl.create, stockCtrl.jsonStock)
// Show
router.get('/:id', stockCtrl.show, stockCtrl.jsonStock)

module.exports = router