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
      
       },
     },

     {
       sets: {
         type: Number,
        
       },
     },

     {
       reps: {
         type: Number,
         
       },
     },
     
     {
       distance: {
         type: Number,
         

       },
     },
       
  ],
  totalDuration: {
    type: Number,
    
  }
});

const Workout = mongoose.model("Workouts", workoutSchema);

module.exports = Workout;
//Workout is also in route/api