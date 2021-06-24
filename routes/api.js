const router = require('express').Router();
const Workout = require('../models/Workout');

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
router.put('/api/workouts/:id', async (req, res) => {
    try {
        console.log(req.body)
        const workout = await Workout.findById(req.params.id)
        workout.exercises.push(req.body)
        await workout.save()
      res.status(200).json(workout)}
      catch(err) {
          console.log(err)
          res.status(400).json(err)}
  });
// create workout
router.post("/api/workouts", (req, res) => {
    console.log("test");
    Workout.create({})
      .then(workout => {
        res.json(workout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

// get workouts in range
router.get("/api/workouts/range", (req, res) => {
  Workout.aggregate([
      {
          $addFields: {
            totalDuration: {
              $sum: '$exercises.duration',
            },
          },
        },
  ]).then(dbWorkout => {
      console.log("WORKOUTS");
      console.log(dbWorkout);
      res.json(dbWorkout);
  }).catch(err => {
      res.json(err);
  });
});
  module.exports = router;











