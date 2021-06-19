const model  = require('mongoose');
const router = require("express").Router(); //add this?
const path = require('path');

// ROUTING

module.exports = (app) => {
  // => HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  
  //app.get('/', (req, res) => {//
  router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  //app.get('/exercise', (req, res) => {
    router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
  });

  // If no matching route is found default to home
  //app.get('/stats', (req, res) => {
    router.get('/stats', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
  });
};

model.exports = router