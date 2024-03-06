
const Recipe = require('../models/recipe');

exports.createRecipe = async (req, res, next) => {
  try {
    const { title, description, ingredients, instructions, image } = req.body;
    const createdBy = req.user._id;
    const recipe = new Recipe({ title, description, ingredients, instructions, image, createdBy });
    await recipe.save();
    res.status(201).send(recipe);
  } catch (error) {
    next(error);
  }
};

exports.getRecipe = async (req, res, next) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).send('Recipe not found');
    }
    res.send(recipe);
  } catch (error) {
    next(error);
  }
};

exports.updateRecipe = async (req, res, next) => {
  try {
    const { title, description, ingredients, instructions, image } = req.body;
    const recipe = await Recipe.findByIdAndUpdate(req.params.id, 
      { title, description, ingredients, instructions, image }, 
      { new: true, runValidators: true });
    if (!recipe) {
      return res.status(404).send('Recipe not found');
    }
    res.send(recipe);
  } catch (error) {
    next(error);
  }
};

exports.deleteRecipe = async (req, res, next) => {
  try {
    const recipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!recipe) {
      return res.status(404).send('Recipe not found');
    }
    res.send(recipe);
  } catch (error) {
    next(error);
  }
};
