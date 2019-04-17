const express = require('express');
const router = express.Router();
const database = require('../../mysqlconnection');


router.get('/',(req,res,next)=>{
  var data = [];
   var sql = "Select DISTINCT(reaction_name),reaction_id From patient_reactions";
        database.query(sql, function (err, rows, fields) {
          if(rows.length != 0){
            data = rows;
            console.log(data);
           return res.json(data);
        }
        else{
            data = 'No data Found..';
           return res.json(data);
        }
        });
        
       
    });

    router.post('/',(req,res,next)=>{
    
    console.log(req.body);
    var sql="Select DISTINCT(reaction_name),reaction_id From patient_reactions";
    for(let i=0;i<req.body.length;i++) {
      for(let j=0;j<res.length;j++){
        if(req.body[i] !=res[j].reaction_name ){
            var sql_insert = "INSERT into patient_reactions (reaction_name) VALUES"+ req.body[i];
            var sql_ = "" 
        }
      }
    }

    va

    })


    



module.exports = router;