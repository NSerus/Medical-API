const router = require('express').Router(); //router function of //express
const controller = require("../Controller/controller");//API HOME



router.get('/test', (req, res)=>
{
    res.send('API WORKING');
});//Plan routes
router.route('/').get(controller.index)
                .post(controller.add);
                
router.route('/:id').get(controller.view)
    
module.exports = router;