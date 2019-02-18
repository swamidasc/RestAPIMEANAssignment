const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");


mongoose.set('useCreateIndex', true);


const User = require("./model/user");
const NewComplaints = require("./model/complaints");

mongoose.connect('mongodb://localhost/grmodule',{ useNewUrlParser: true });



const app = express();


var cors = require('cors');
app.use(cors());
app.options('*', cors());

app.listen(9000);

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());


app.post('/api/user',function(req,res){
    let data = req.body
//  console.log(data);
    User.insertUser(data,function(err,data){
        if(err){
            res.status(500).send(err);
        }
        else{
            res.send(data);
        }
    })
})


app.get('/api/users',function(req,res){
    
    User.getUsers(function(err,data){
        if(err){
            res.status(500).send(err);
        }else{
            res.send(data);
        }
    })
})

app.get('/api/user/:Email/:Password',function(req,res){
    
    User.getUserByName(req.params,function(err,data){
        if(err){
            res.status(500).send(err);
        }else{
            res.send(data);
        }
    })
})

// 

app.get('/api/getcomplaints',function(req,res){
   // console.log('all');
    NewComplaints.getComplaints(function(err,data){
        if(err){
            res.status(500).send(err);
        }else{
            res.send(data);
        }
    })
})


app.get('/api/getcomplaintsid/:Email',function(req,res){
    //console.log('particular complaints');
      NewComplaints.getComplaintsByUName(req.params,function(err,data){
           // console.log(data);

        if(err){
            res.status(500).send(err);
        }else{
            res.send(data);
        }
    })
})



app.get('/api/getComplaintsByid/:_id',function(req,res){
   // console.log('id complaints');
   // var _id = req.params._id
    //var id = mongoose.Types.ObjectId(req.params);
    //console.log(id);
 //  var object = req.body;
 //console.log(req.params);
      NewComplaints.getComplaintsByid(req.params,function(err,data){
       
          console.log(data);
        if(err){
            res.status(500).send(err);
        }else{
            res.send(data);
        }
    })
})


app.post('/api/NewComplaintReg',function(req,res){
    let data = req.body
       // console.log(data);
        NewComplaints.insertNewComplaint(data,function(err,data){
        if(err){
            res.status(500).send(err);
        }
        else{
            res.send(data);
        }
    })
})


app.put('/api/complaintstatusupdate/:_id',function(req,res){
    // let data = req.body;
   // console.log(req.params);
    
    //console.log(req.body);
    NewComplaints.updateComaplintStatus(req.params, req.body, function(err,data){
       // console.log(data);
        if(err){
            res.status(500).send(err);
        }
        else{
            res.send(data);
        }
    })

})