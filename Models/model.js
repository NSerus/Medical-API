var mongoose = require('mongoose');  //using mongoose//the schema of the model, aka the structure
var PlanSchema = mongoose.Schema({
    basic_info:{
        name: {
            type: String,
            required: true
        },
        date_of_birth: {
            type: Date,
            required: true
        },
        address:{
            type: String,
            required: true
        },
        emergency_phone:{
            type: Number,
            required: true
        },
        care_plan:{
            type: String,
            required: false
        },
    },

    health_history: {
        medication:{
            type: String,
            required: false
        },

        allergies:{
            type: String,
            required: false
        },
        mental_state:{
            type: String,
            required: false
        }
    },

    consult: {
        consult_date:{
            type: Date,
            required: true
        },
        exams:{
            required:false,
            
            type_exams:{
                type: String,
            required: false
            },
            date_exams:{
                type: Date,
                required: false
            }
        },
        medications:{
            med_name:{
                type: String,
                required: false
            }
        },
        Description:{
            type:String,
            required: true
        }
    },

});// Export Plan Model
var Plan = module.exports = mongoose.model('plan', PlanSchema);module.exports.get = function (callback, limit) {
    Plan.find(callback).limit(limit); 
}