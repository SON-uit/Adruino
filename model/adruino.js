const mongoose = require("mongoose");
const adruinoSchema = new mongoose.Schema({
    ipAdress: {
        type: String,
    },
    name: {
        type: String,
    },
    sensor: {
        type:String,
    },
    value: {
        type: String,
    }
},{timestamps:true})
const adruino = mongoose.model("Adruino",adruinoSchema);
module.exports = adruino;