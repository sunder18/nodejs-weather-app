const path = require('path');
const hbs = require('hbs')
const express = require('express')

const app = express();

console.log(__dirname);
console.log(path.join(__dirname ,'../public'))
const pathDirectory = path.join(__dirname ,'../partials')
const viewroute = path.join(__dirname,'../Template/views')
app.set('view engine','hbs')
app.set('views',viewroute)
hbs.registerPartials(path.join(__dirname,'../Template/partials'))
 app.use(express.static(pathDirectory));
 

 app.get('/home',(req,res)=>{
res.render('index',{
    Title : 'Home Page',
    Name : 'Naidu Sunderam'
}
)

 })
// z
app.get('/register',(req,res)=>{
    res.send({
        Title : "Register",
        Name : "Sunderam Naidu"

    })
})

app.get('/email',(req,res)=>{
    
    if(!req.query.search){
        return res.send("Please enter the value to search:")
    }
    
    res.send({
        Title : "Email",
        Name : "Sunderam Naidu",
        Email : req.query.search
    })

app.post('/login',()=>{
    res.send({
        Title: 'hey this is getting started:',
        Message : 'This is done by the post method declared in node'
    })
})
})

app.get('/login/*',(req, res)=>{
    res.render('404',{
        Title : 'The otherwise page if no other routes in login route is detected :',
        Errormsg : 'looking for the article is not found.'
    }
    )});
app.get('*',(req, res)=>{
    res.render('404',{
        Title : 'The otherwise page if no other routes are detected :',
        Errormsg : 'Error 404 not found'
    }
    );

})

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`server is running at port http://localhost:${PORT}`)
})