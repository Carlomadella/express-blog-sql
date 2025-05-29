const express = require("express");
const router = express.Router()

// importo il controller
const postController = require('../controllers/postController')

// rotte crud per le pizze 

// rotta index
router.get("/", postController.index)

// rotta dettaglio del singolo post
router.get("/id" , postController.show)

router.delete("/id" , postController.delete)

module.exports = router