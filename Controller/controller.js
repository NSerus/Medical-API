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
    plan.name = req.body.name? req.body.name: plan.name;
    plan.age = req.body.age;//Saving and error checking
    plan.health_history.health = req.body.health_history.health;
    plan.health_history.na = req.body.health_history.na;
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
