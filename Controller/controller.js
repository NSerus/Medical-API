//Import Plan Model
Plan = require('../Models/model');//Index
exports.index = (req, res)=>
{
    Plan.get((err, plan)=>
    {
        if (err)
        {
            res.json({
                status: "error",
                message: err
            });
        }
        res.json({
            status: "OK",
            message: "Successfully got Plans",
            data: plan       
        });
    });
};//New Plan
exports.add = (req, res)=>
{
    var plan = new Plan();
    //Info basica
    plan.basic_info.name = req.body.basic_info.name? req.body.name: plan.name;
    plan.basic_info.date_of_birth = req.body.basic_info.date_of_birth;
    plan.basic_info.address = req.body.basic_info.address;
    plan.basic_info.emergency_phone = req.body.basic_info.emergency_phone;
    plan.basic_info.care_plan = req.body.basic_info.care_plan;
    
    //historia médica
    plan.health_history.medication = req.body.health_history.medication;
    plan.health_history.allergies = req.body.health_history.allergies;
    plan.health_history.mental_state = req.body.health_history.mental_state;

    //Dados de consulta
    plan.consult.consult_date = req.body.consult.consult_date;
    plan.consult.exams.type_exams = req.body.consult.exams.type_exams;
    plan.consult.exams.date_exams = req.body.consult.exams.date_exams;
    plan.consult.medications = req.body.consult.medications;
    plan.consult.description = req.body.consult.description;

    plan.save((err)=>
    {
        if (err) res.json(err);
        res.json({
            message: "New Plan Added!",
            data: plan
        });
    });
};//Get Plan
exports.view = (req, res)=>
{
    Plan.findById(req.params.id, (err, plan)=>
    {
        if (err) res.send(err);
        res.json({
            message: 'Plan Details',
            data: plan
        });
    });
}
