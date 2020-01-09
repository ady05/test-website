const path = require('express')
const app = express()
const hbs =require('hbs')
const path = require('path')
const port = process.env.PORT
const viewpath = path.join(__dirname,'/view')

app.set('view engine','hbs')
app.set('views',viewpath)


app.get('',(req,res)=>{
    res.render('index',{
        title:'start'
    })
})

app.listen(port,()=>{
    console.log('server is running')
})
