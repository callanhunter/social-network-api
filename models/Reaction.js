const { Schema, model } = require("mongoose");

const moment = require("moment");
const reactionSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min: 1,
      max: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (time) => moment(time),
    },
    username: {
      type: String,
      required: true,
    },
  },
  {}
);

module.exports = reactionSchema;
