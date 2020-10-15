let express = require("express")
let ourApp = express()
ourApp.use(express.urlencoded({extended: false})) //så vi kan bruge brugerens input

ourApp.get('/', (req, res) =>{
    res.send(`
    <form action="/answer" method="POST">
    <p>What is ur age Benjamin?</p>
    <input name="age" autocomplete="off">
    <button>Submit</button>
    </form>
    `)
})

//Post
ourApp.post('/answer', (req, res) =>{
    if (req.body.age.toUpperCase() == 27) {
        res.send(`
        <p>That's correct answer</p>
        <a href="/">Back to homepage</a>
        `)
        
    } else {
        res.send(`
        <p>That's wrong answer</p>
        <a href="/">Back to homepage</a>
        `)
    }
})
//Get
ourApp.get('/answer', (req, res) =>{
    res.send("Are you Lost?")
})
ourApp.listen(3000)

