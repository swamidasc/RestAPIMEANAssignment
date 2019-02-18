const mongoose =  require("mongoose");

let complaintsSchema = new mongoose.Schema({

    Email : {
        type    : String,
        required    : true
    },

    complaint_description  : {
        type    : String,
        required    : true
    },

    complaint_created_date  : {
        type    :  Date,
        required    : true,
        default : Date.now
    },


    complaint_status :  {
        type    :  String,
        required    : true,
        default : 'New'
    },

     complaint_updated_date  : {
        type    :  Date,
        required    : true,
        default : Date.now
    },

});


let NewComplaints = mongoose.model("NewComplaints", complaintsSchema);

module.exports.getComplaints = function(callback,limit)
{
    NewComplaints.find(callback).limit(limit);
}

module.exports.getComplaintsByid  = function(_id,limit)
{

    NewComplaints.find(_id,limit);
   
}

module.exports.getComplaintsByUName = function(Email,limit)
{
    NewComplaints.find(Email,limit);
}

module.exports.insertNewComplaint =function(data,callback)
{
    NewComplaints.create(data,callback);
}


module.exports.updateComaplintStatus = function(_id,data,callback)
{
  
    NewComplaints.updateMany(_id,data,callback);
}

