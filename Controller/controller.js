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
            message: "Details from all Plans",
            data: plan       
        });
    });
};//New Plan
exports.add = (req, res)=>
{
    var plan = new Plan();
    //Info basica
    plan.basic_info.name = req.body.basic_info.name;
    plan.basic_info.date_of_birth = req.body.basic_info.date_of_birth;
    plan.basic_info.address = req.body.basic_info.address;
    plan.basic_info.emergency_phone = req.body.basic_info.emergency_phone;
    plan.basic_info.care_plan = req.body.basic_info.care_plan;
    
    //historia médica
    plan.health_history.medication_history = req.body.health_history.medication_history;
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
            message: 'Details from plan',
            data: plan
        });
    });
}

exports.view_info = (req, res)=>
{
    var basic = [];

    Plan.get((err, plan)=>
    {
        if (err)
        {
            res.json({
                status: "error",
                message: err
            });
        }
        for(var i=0;i<plan.length;i++){
            basic.push(plan[i].basic_info);
        }
        res.json({
            status: "OK",
            message: "Successfully got basic info from all clients",
            basic_info: basic
        });
    });
}

exports.view_info_id = (req, res)=>
{
    
    Plan.findById(req.params.id, (err, plan)=>
    {
        if (err) res.send(err);
        res.json({
            message: 'Successfully got basic info from ' + plan.basic_info.name,
            data: plan.basic_info
        });
    });
}


exports.view_his = (req, res)=>
{
    var basic = [];

    Plan.get((err, plan)=>
    {
        if (err)
        {
            res.json({
                status: "error",
                message: err
            });
        }
        for(var i=0;i<plan.length;i++){
            basic.push(plan[i].health_history);
        }
        res.json({
            status: "OK",
            message: "Successfully got health history from all clients",
            health_history: basic
        });
    });
}

exports.view_his_id = (req, res)=>
{
    
    Plan.findById(req.params.id, (err, plan)=>
    {
        if (err) res.send(err);
        res.json({
            message: 'Successfully got health history from ' + plan.health_history.name,
            data: plan.health_history
        });
    });
}


exports.view_cons = (req, res)=>
{
    var basic = [];

    Plan.get((err, plan)=>
    {
        if (err)
        {
            res.json({
                status: "error",
                message: err
            });
        }
        for(var i=0;i<plan.length;i++){
            basic.push(plan[i].consult);
        }
        res.json({
            status: "OK",
            message: "Successfully got consult info from all clients",
            basic_info: basic
        });
    });
}

exports.view_cons_id = (req, res)=>
{
    
    Plan.findById(req.params.id, (err, plan)=>
    {
        if (err) res.send(err);
        res.json({
            message: 'Successfully got basic info from ' + plan.consult.name,
            data: plan.consult
        });
    });
}

exports.search_name= (req, res)=>
{
    var count = [];

    Plan.get((err, plan)=>
    {
        if (err)
        {
            res.json({
                status: "error",
                message: err
            });
        }
        for(var i=0;i<plan.length;i++){
            if(plan[i].basic_info.name === req.params.name) count = plan[i];
        }
        res.json({
            status: "OK",
            message: "Successfully got info from given name",
            info: count
        });
    });
}

exports.count= (req, res)=>
{
    var count = 0;

    Plan.get((err, plan)=>
    {
        if (err)
        {
            res.json({
                status: "error",
                message: err
            });
        }
        for(var i=0;i<plan.length;i++){
            count++;
        }
        res.json({
            status: "OK",
            message: "Successfully got consult info from all clients",
            basic_info: count
        });
    });
}