const express = require("express")
const mongoose = require("mongoose")
const Product = require("./models/product.model.js")
const productRoute = require("./routes/product.route.js")
const app = express()

// this is the middleware config
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);






app.get('/', (req, res) => {
    res.send("Hello from Node API server")
})






mongoose.connect("mongodb+srv://janitha:5ej6xwvuAyMhyt4h@backenddb.5nnsp0a.mongodb.net/NODE-API?retryWrites=true&w=majority&appName=BackendDB")
    .then(() => {
        console.log("Database Connected!")
        app.listen(3000, () => {
            console.log("server is running on port 3000")
        })
    })
    .catch(() => {
        console.log("Connection Faild!")
    })