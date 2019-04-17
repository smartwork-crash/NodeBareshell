const express = require('express');
const promise = require('promise');
const router = express.Router();
const database = require('../../mysqlconnection');
// const session = require('express-session');
// var shortUrl = require('node-url-shortener');
//session.id=1;
router.get('/',(req,res,next)=>{
	//var sess=session.id;
	//session.id=1;

		var arr=[];
		var sql="SELECT DISTINCT(drug_generic_name),id,drugdosagetext,drugindication FROM drugs";
		database.query(sql,function(err,result,response){
			if(err) throw err;
			if(result.length==null){
				res.send({message:"No drugs exist for you"});
			}
			else{
					res.send(result);
				}
		});
	}
);
module.exports = router;