const router = require('express').Router(); //router function of //express
const controller = require("../Controller/controller");//API HOME
router.get('/test', (req, res)=>
{
    res.send('API WORKING');
});//Plan routes
router.route('/').get(controller.index)
                .post(controller.add);
                


router.get('/', (req, res)=>
{
    res.send('API WORKING');
});//Plan routes

router.route('/basic').get(controller.view_info)
router.route('/history').get(controller.view_his)
router.route('/consult').get(controller.view_cons)

router.route('/count').get(controller.count)
router.route('/:name').get(controller.search_name)


router.route('/basic/:id').get(controller.view_info_id)
router.route('/history/:id').get(controller.view_his_id)
router.route('/consult/:id').get(controller.view_cons_id)

router.route('/:id').get(controller.view)
    
module.exports = router;