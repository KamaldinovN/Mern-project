import express from 'express'
import config from "config"
import {registeredValidator} from "./validation/auth.js";
import {checkAuth, handleValidationErrors} from './utils/index.js';
import {UserController} from './Controlers/index.js';
import pizza from "./models/PizzaSchema.js";
import {MongoClient} from "mongodb";




const app = express()

app.use(express.json())


const PORT = config.get('port') || 5000

const client = new MongoClient(config.get('mongoUri'))



async function start() {
    try {
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
    } catch (e) {
        console.log(`server error`, e.message)
        process.exit(1)
    }
}

start()

app.get('/items', (req,res) => {
    MongoClient.connect(config.get('mongoUri'), function (err, db) {
        if (err) throw err;
        const dbo = db.db("Main");
        dbo.collection("pizzas").find().toArray(function (err, result) {
            if (err) throw err
            res.send(result)
        })

    })
})


app.post('/auth/login', handleValidationErrors, UserController.login);
app.post('/auth/register', handleValidationErrors, registeredValidator, UserController.register);
app.get('/auth/me', checkAuth, UserController.getMe);


