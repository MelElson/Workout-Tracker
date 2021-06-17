const router = require("express").Router();
const Workouts = require("../models/workoutmodel.js");


router.post("/api/workout", ({ body }, res) => {
    Workouts.create(body)
      .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  router.post("/api/workout/bulk", ({ body }, res) => {
    Workouts.insertMany(body)
      .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  router.get("/api/workout", (req, res) => {
    Workouts.find({})
      .sort({ date: -1 })
      .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  module.exports = router;