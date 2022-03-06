const express = require('express')
var router = express.Router()

router.get('/', function(req, res, next){
    req= Date.now()
    let d = req
    d = parseInt(d)

    if(d < 17){
        next()
    }else{
        res.render('Sorry, Not Available.')
    }
    next()
})
module.exports = router