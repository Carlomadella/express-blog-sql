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

const show = (req, res) => {
    const { id } = req.params;
    
    // creo la query per il recupero del singolo post
    const postSql = "SELECT * FROM posts WHERE id = ?";
    
    // BONUS: creo la query per recuperare i tag del post che vogliamo visualizzare
    const tagSql = `
        SELECT *
        FROM tags
        JOIN post_tag ON post_tag.tag_id = tags.id
        WHERE post_tag.post_id = ?
    `;
    
    // eseguo la query
    connection.query(postSql, [id], (err, postResult) => {
        if(err) return res.status(500).json({error: "Database query failed: "+err});
        
        // controlliamo che il post cercato esista
        if(postResult.length === 0) return res.status(404).json({error: "Post not found"})
        
        // recuperiamo il singolo post dall'array risultato
        const post = postResult[0];
        
        // BONUS
        // eseguo la seconda query per recuperare i tag del post trovato
        connection.query(tagSql, [id], (err, tagsResult) => {
            if(err) return res.status(500).json({error: "Database query failed: "+err});
            
            // nell'oggetto post vado a creare una nuova proprietà a cui assegnare l'array recuperato
            post.tags = tagsResult;
            
            res.json(post);
        })
    })
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