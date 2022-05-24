const { Schema, model } = require("mongoose");
const moment = require("moment");
const reactionSchema = require("./Reaction");

const thoughtSchema = new Schema(
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
    reactions: [reactionSchema],
  },
  {}
);

thoughtSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
