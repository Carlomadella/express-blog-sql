const express = require( 'express'); 
// inizializzo la variabile app con il metodo express() 
const app = express(); 
const port = 3000;

// importo il router post
const postRouter = require('./routers/post');

// middleware per gli asset statici
app.use(express.static('public'));

// middleware per il parsing del body delle richieste
app.use(express.json());

// utilizzo il router importato
app.use('/posts', postRouter); // <<-- PRIMA di app.listen

// entry point
app.get("/", (req, res) => {
    console.log("Server del mio blog");
    res.send("Benvenuto nel mio blog");
});

app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`);
});