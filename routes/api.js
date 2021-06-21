const router = require("express").Router();
const Workout = require("../models/Workouts");


router.get("/api/workouts", (req, res) => {
  Workout.find({})
     .then(dbWorkout => {
     Workout.forEach(workout => {
      var total = 0;
      workout.exercises.forEach(e => {
        total += e.duration;
      });
      workout.totalDuration = total;
     }); 

     res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});
router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  router.put('/api/workouts/:id', (req, res) => {
    Workout.findOneAndUpdate(req.body, {
      where: {
        id: req.params.id
      },
    })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
  });
 
  router.get('/api/workouts/range', (req, res) => {
    Workout.find({})
    
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
  });
  
  module.exports = router;