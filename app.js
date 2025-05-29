const express = require( 'express'); 
// inizializzo la variabile app con il metodo express() 
const app = express(); 
// definisco il numero di porta su cui server deve rimanere in ascolto 
console. log() 
const port = 3000

// middleware per gli assett statici
app.use(express.static('public'))
// middleware per il parsing del body delle richieste
app.use(express.json())

// entry point
app.get("/", (req,res) => {
    console.log("Server del mio blog")
    res.send("Benvenuto nella mia pizzeria")
})


app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`)
})