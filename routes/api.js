const router = require("express").Router();
const Workout = require("../models/Workouts");


// router.get("/api/workouts", (req, res) => {
//   Workout.find({})
//      .then(workout_db => {
    

//      res.json(workout_db);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });
router.get('/api/workouts', (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: '$exercises.duration',
        },
      },
    },
  ])
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.json(err);
    });
});
// router.post("/api/workouts", (req, res) => {
//     Workout.create({})
//       .then(dbWorkout => {
//         res.json(dbWorkout);
//       })
//       .catch(err => {
//         res.status(400).json(err);
//       });
//   });
  
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