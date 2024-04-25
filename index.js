const express = require("express")
const app = express()
const port = 3000
const path = require("path");
const { title } = require("process");


// setting variable global
app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, "./views"))

app.use("/asset", express.static(path.join(__dirname, "./asset")))

    app.use(express.urlencoded({extended: false}))
//routing

app.get("/", home)
app.get("/detail", detail)
app.post("/detail", addetail)
app.get("/project/:id", project)

const data = []

// service
function home(req, res) {
   
    res.render("index", {data: data})
}

function detail(req,res) {

    res.render("detail")
}

function addetail(req,res) {
     
    const {title, content, start, end} = req.body
   data.push({
    title,
    content,
    start,
    end,
   })

    res.redirect("/")
}

function project(req,res) {

    const { id } = req.params
    
    const data = {
        title: "hello",
        content: "hello bima",
        start: "12 agustus 2000",
        end: "13 agustus 2000",
        month: "1 bulan"

    }

    res.render("project", {data: data})
}


app.listen(port, () => {
    console.log('example app listening on PORT:', port)
})