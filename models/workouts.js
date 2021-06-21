const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({

  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
      },
    },
    {
      duration: {
        type: Number,
        default: 0,
      },
    },

     {
       name: {
         type: String,
         trim: true,
       },
     },
     {
       weight: {
         type: Number,
         default: 0,
       },
     },

     {
       sets: {
         type: Number,
         default: 0,
       },
     },

     {
       reps: {
         type: Number,
         default: 0,
       },
     },
     
     {
       distance: {
         type: Number,
         default: 0,

       },
     },
       
  ],
});

const Workout = mongoose.model("/Workouts", workoutSchema);

module.exports = Workout;
//Workout is also in route/api