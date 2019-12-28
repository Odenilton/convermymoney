const express = require('express')
const app = express()
const path = require('path')

const  { convert, toMoney } = require('./lib/convert')

const port = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/cotacao', (req, res) => {
    let { cotacao, quantidade } = req.query
    if (cotacao && quantidade) {
        let result = convert(cotacao, quantidade)
        res.render('cotacao', {
            error: false,
            cotacao: toMoney(cotacao),
            quantidade: toMoney(quantidade),
            result: toMoney(result)
        })
    } else {
        res.render('cotacao', {
            error: 'Valores inválidos'
        })
    }
    
})

app.listen(port, err => {
    if (err) {
        console.log('Não foi possível iniciar')
    } else {
        console.log('ConverMyMoney esta online')
    } 
})