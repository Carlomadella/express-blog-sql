const express = require("express");
const router = express.Router();

// importo il controller
const postController = require('../controllers/postController');

// creo le rotte CRUD del progetto

// rotta index: mostra tutti i post
router.get("/", postController.index);

// rotta dettaglio del singolo post
router.get("/:id", postController.show);  

// rotta cancellazione post
router.delete("/:id", postController.destroy); 

module.exports = router;