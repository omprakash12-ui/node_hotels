const express = require('express');
const router = express.Router();
const menuItem = require('./../models/menuItem')

router.post('/' , async(req,res) => {
  try{
    const data = req.body;
    const newMenuItem = new MenuItem(data);
    const response = await newMenuItem.save();
    console.log('menu item is saved');
    res.status(201).json(response);


  }catch(error){
    console.log('error creating menuitem', error);
    res.status(500).json({error :' internal server errror'})

  } 
})

router.get('/', async(req,res) => {
  try{
   const data = await menuItem.find();
   console.log('data fetched');
   res.status(200).json(data);
  }catch(error){
    console.log(error);
    res.status(500).json({error : 'internal server error'})
  }
})

router.put('/:id' ,async(req,res) => {
  try{
  const menuId = req.params.id;
  const updateMenuData = req.body;

  const response = await menuItem.findByIdAndUpdate(menuId,updateMenuData, {
    new : true,
    runValidators : true,
  })

  if(!response) {
    return res.status(404).json({error : 'menu item not found'})
   }
    console.log('data updated')
    res.status(200).json(response);

  }catch(err){
    console.log(err);
    res.status(500).json({error : 'Internal server Error'})
  }
})

 router.delete('/:id', async (req, res) => {
 try{
     const menuId = req.params.id; 
     const response = await menuItem.findByIdAndDelete(menuId);
  
 if (!response) {
      return res.status(404).json({ error: 'Menu Item not found' });
 }
    console.log('data delete');
    res.status(200).json({message: 'Menu Deleted Successfully'});
 }catch(err){
     console.log(err);
     res.status(500).json({error: 'Internal Server Error'});
 }
 })

 // comment add for testing 
module.exports = router;
