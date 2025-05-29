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
    
// recupero l'id del post da cancellare
    const id = req.params.id;

// stabilisco la connessione per fare la query
    connection.query("DELETE FROM posts WHERE id = ?", [id], (err) => {
// controllo che err sia pieno
        if(err) return res.status(500).json({error: "Database query failed: "+err});

        res.sendStatus(204);
    })
}

module.exports = {
    index,
    show,
    destroy
}