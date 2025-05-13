
const mongoose = require('mongoose');
const userSchema  = new mongoose.Schema({

    userName:{
        type:String,
        required:true,
    },
    userAge:{
        type:Number,
        required:true,
    },
    userNumber:{
        type:String,
        required:true,
        maxlength:[11,'number can not be longer then 11 words']
    },
    destination :{
        type:String,
        required:true
    },
    travelDate:{
        type:String,
        required:true
    },
    returnDate:{
        type:String,
        required:true
    },
    ticketQuantity:{
        type:Number,
        required:true
    },
    totalPrice:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model('bookings',userSchema);













// const mongoose = require('mongoose');
// const userSchema  = new mongoose.Schema({
//     userName:{
//         type:String,
//         required:true,
//     },
//     email:{
//         type:String,
//         required:true,
//     },
//     password:{
//         type:String,
//         required:true,
//     }
// })

// module.exports = mongoose.model('users',userSchema);