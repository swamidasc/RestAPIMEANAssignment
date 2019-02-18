const mongoose =  require("mongoose");

let userSchema = new mongoose.Schema({

    Email : {
        type    : String,
        required    : true,
        unique      : true
    },

    MobileNumber : {
        type    : String,
        required    : true,
        unique      : true
    },

    Password : {
        type    : String,
        required    : true
    },

    joined_date :  {
        type    :  Date,
        required    : true,
        default : Date.now
    },

    usertype :  {
        type    :  String,
        required    : true,
        default : 'Customer'
    }

});

let User = mongoose.model("User", userSchema);

module.exports.getUsers = function(callback,limit)
{
    User.find(callback).limit(limit);
}

module.exports.getUserByName = function(Email,Password,callback)
{
    User.find(Email,Password,callback);
}

module.exports.insertUser =function(data,callback)
{
    User.create(data,callback);
}

// module.exports.updateUser = function(user,data,callback)
// {
//     User.update(user,data,callback);
// }

// module.exports.deleteUser = function(id,callback)
// {
//     User.findByIdAndRemove(id,callback);
// }
