const express=require('express');
const UsersData = require('../Model/UsersData');

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
router.get('/:id', async(req,res) => {
    try{
    
        const data=await userData.findById(req.params.id);
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

    router.put('/:id', async(req,res) => {
        
        try{
        
           const a1=await userData.findById(req.params.id);
           a1.name=req.body.name
           a1.age=req.body.age
           const a2=await a1.save();
           res.json(a2);
        }
        catch(err)
        {
            res.send(err);
        }
        
        })

    router.delete('/:id', async(req,res) => {
        
        try{
        
           const a1=await userData.findByIdAndRemove(req.params.id);
           res.json(a1);
        }
        catch(err)
        {
            res.send(err);
        }
        
        })
    


module.exports = router;