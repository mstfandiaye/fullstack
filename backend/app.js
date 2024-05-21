const express = require('express') ;

const app = express()


app.use((req,res)=>{
    res.json({'msg' : 'json message up'})
}); 

module.exports = app ;