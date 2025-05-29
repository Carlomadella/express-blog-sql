// metodo index del controller
const index = (req,res) => {
    console.log("Elenco dei post")
}

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