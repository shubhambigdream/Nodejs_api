const express=require('express');

const router=express.Router();
const userData=require('../Model/UsersData')

router.get('/', async(req,res) => {
try{

    const data=await userData.find();
    res.json(data);

}
catch(err)
{
    res.send('err');
}

})
router.post('/', async(req,res) => {
    res.header("Access-Control-Allow-Origin", "*");
    console.log(req);
    const data=new userData({
        name: req.body.name,
        age: req.body.age
    });
    try{
    
       const a1=await data.save();
       res.json(a1);
    }
    catch(err)
    {
        res.send(err);
    }
    
    })


module.exports = router;