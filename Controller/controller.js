//Import Plan Model
Plan = require('../models/model');//Index
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
    plan.name = req.body.name? req.body.name: plan.name;
    plan.cellphone = req.body.cellphone;//Saving and error checking
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
