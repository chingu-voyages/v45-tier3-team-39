const asyncHandler = require('express-async-handler');
const Category = require('../models/Category')


// @desc    Create a category
// @route   POST /api/categories
// @access  Private/admin
const createdCategory = asyncHandler(async (req, res) => {
    let category = new Category({
        name: req.body.name,
    })
    category = await category.save();

    if(!category){
        res.status(404);
    throw new Error('this category cannot be created');
    }
    res.status(201).json(category)
    
  });

// @desc    Update a category
// @route   PUT /api/categories:id
// @access  Private/admin
const updateCategory = asyncHandler(async (req, res) => {
    const category = await Category.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
        },
        {new: true}
    )
    if(!category){
    res.status(404);
    throw new Error('this category cannot be updated at the moment');
    }
    res.json(category);

});


  //@desc   get all category
  //@route  GET /api/categories
  //@access public
  
  const getAllCategory = asyncHandler(async (req, res) => {
    const category = await Category.find();
    if (!category) {
      res.status(404);
      throw new Error("category Not Found");
    }
    res.json(category);
  });




// @desc    DELETE a Category
// @route   DELETE api/category/:id
// @access  Admin

const deleteCategory = asyncHandler(async (req, res) => {
    const category = await Category.findById(req.params.id);
  
    if (!category) {
      res.status(404);
      throw new Error('category not found' );
    }
  
    await category.deleteOne();
    res.status(200).json({ message: 'The category has been deleted' });
  });
  


  module.exports = {
    createdCategory,
    deleteCategory,
    updateCategory,
    getAllCategory

    
  }

  