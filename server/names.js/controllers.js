let names = []

module.exports = {
    getNames: (req, res) => {
        console.log("hit")
        res.send(names);
    },
    newName: (req, res) => {
        const{name} = req.body;
        let newName = {
            name: req.body.name,
        
    
        }
        console.log(name);
        names.push(name);
        res.status(200).send(names);
    },
    editName: (req,res) => {
        
        let index = null;
    names.forEach((name, i) => {
        if(name === req.params.name) index = i;
      })
      names[ name ] = {
       
        name: req.body.name || names[ index ].name,
        
      };
      res.status(200).send( names );
    },
    deleteAll: (req,res) => {
        names = [];
        res.sendStatus(200)
    },
    deleteOne: (req,res) => {
        let index = null;
    names.forEach((name, i) => {
        if(name === req.params.name) index = i;
      })
      names.splice(index, 1)
      res.status(200).send( names );
        }
    } 