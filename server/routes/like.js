"use strict";

const userHelper    = require("../lib/util/user-helper")

const express       = require('express');
const likeRoutes  = express.Router();

module.exports = function(DataHelpers) {

  likeRoutes.post("/", function(req, res) {
    DataHelpers.updateTweet(update, (err) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(201).send();
      }
    });
  });

  return likeRoutes;

}
