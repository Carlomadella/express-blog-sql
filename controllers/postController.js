// importo la variabile connection
const connection = require('../data/db.js');

// metodo index del controller
const index = (req, res) => {
  // eseguo la query
  connection.query("SELECT * FROM posts", (err, postsResults) => {
    // se la query mi dà errore
    if (err) return res.status(500).json({ error: "Database query failed: " + err });

    res.json(postsResults);
  });
};

// metodo show del controller
const show = (req,res) => {
    console.log(`Dettaglio del post con id:${req.params.id}`)
}

// metodo delete del controller
const destroy = (req,res) => {
    console.log(`Cancellazione del post con id:${req.params.id}`)
}

module.exports = {
    index,
    show,
    destroy
}