var mongoose = require('mongoose');  //using mongoose//the schema of the model, aka the structure
var PlanSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    cellphone: {
        type: String,
        required: true
    }
});// Export Plan Model
var Plan = module.exports = mongoose.model('plan', PlanSchema);module.exports.get = function (callback, limit) {
    Plan.find(callback).limit(limit); 
}