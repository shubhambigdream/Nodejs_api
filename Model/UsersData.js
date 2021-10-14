const mongoose = require('mongoose');

const usersData=new mongoose.Schema({

name:{
    type: 'string',
    required: true,
},
age:{
    type: 'number',
    required:true,
}

})

module.exports =mongoose.model('user',usersData);