const express = require('express');
const router = express.Router();
const person = require('../models/person')

router.post('/' , async(req,res) =>{
  try {
    const data = req.body 
    const newPerson = new person(data);

    const response = await newPerson.save();

    console.log('data saved');
    res.status(200).json(response);



  }catch(err){
     console.log(err);
     res.status(500).json({error : 'internal server error'})
  }
})


router.get('/', async (req,res) =>{
  try {
   const data = await person.find();
    console.log('data fetched');
    res.status(200).json(data);

  }catch(err){
  
   console.log(data);
   res.data(500).json({error : 'internal server error'})

  }


})

router.get('/:workType' ,async (req,res) => {
  try{
     const workType = req.params.workType;
     if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){
          
     const response = await person.find({work : workType})  ;
     console.log('response fetched');
     res.status(200).json(response) 
     }else{
      res.status(404).json({error : 'invalid work type'});
     }
  }catch(err){
   console.log(err);
   res.status(500).json({error : 'internal server error'});
  }
})

router.put('/:id', async(req,res) =>{
  try{
        const personId = req.params.id;
        const updatedPersondata = req.body;

        const response = await person.findByIdAndUpdate(personId,updatedPersondata,{
         new: true,
         runvalidaters : true,
    })
      
     if(!response){
        return res.status(404).json({error : ' person not found'})
      }
       console.log('data updated');
       res.status(200).json(response);

      }catch(error){
    console.log(error);
    res.status(500).json({error : 'Internal server error'});

  }
})

router.delete('/:id' ,async (req,res) => {
  try{
    const personId = req.params.id;
    const response = await person.findByIdAndDelete(personId);
    if(!response){
      return res.status(404).json({error : 'person not find'})

  }

    console.log('data deleted');
    res.status(200).json({message : 'person deleted succesfully'});

  }catch(err){
    console.log(err);
    res.status(500).json({error : 'internal server error'});

  }
})


module.exports = router;
