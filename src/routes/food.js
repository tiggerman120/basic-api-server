'use strict';

const express = require('express');

const Foods = require('../models/food');
const foods = new Foods();


const foodRouter = express.Router();

foodRouter.get('/food', getFoods);
foodRouter.get('/food/:id', getOneFood);
foodRouter.post('/food', createFood);
foodRouter.put('/food/:id', updateFood);
foodRouter.delete('/food/:id', deleteFood);

function getFoods(req, res) {
  const allFoods = foods.get();
  res.status(200).json(allFoods);
}

function getOneFood(req, res) {
  const id = req.params.id;
  const oneFood = foods.get(id);
  res.status(200).json(oneFood);
}

function createFood(req, res) {
  const obj = req.body;
  const newFood = foods.create(obj);
  res.status(200).json(newFood);
}

function updateFood(req, res) {
  const updateOneFood = req.params.id;
  foods.update(req.params.id, req.body);
  res.status(200).json(updateOneFood);
}

function deleteFood(req, res) {
  foods.delete(req.params.id);

  res.status(200).json('deleted');
}
module.exports = foodRouter;