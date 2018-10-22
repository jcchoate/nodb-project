const express = require('express');
const bodyParser = require('body-parser')
const axios = require('axios')
const controllers = require('./names.js/controllers.js')
const app = express();

// app.use((req,res) => {
//     console.log('Filtering');
//      next();
// })
app.use(bodyParser.json());
app.get('/api/names', controllers.getNames)
app.post('/api/name', controllers.newName)
app.put('/api/name/:id', controllers.editName)
app.delete('/api/names', controllers.deleteAll)
app.delete('/api/name/:id', controllers.deleteOne)





const port = 3005;
app.listen(port, ()=> {
    console.log(`Its over `+ port +`!!!!!`)
})
