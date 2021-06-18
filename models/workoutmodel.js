const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutmodelSchema = new Schema({

  date: {
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

const Workout = mongoose.model("Workout", workoutmodelSchema);

module.exports = Workout;