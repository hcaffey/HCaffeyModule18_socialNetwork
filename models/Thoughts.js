const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

// schema for thoughts
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxLength: 280,
          },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (date) => {
                if (date) return date.toISOString().split("T") [0];
              },
        },
        username: {
            type: String,
            required: true,
        }, //associated reactions - fixed to search by types
        reactions: [{
            type: Schema.Types.ObjectId,
            ref: 'reaction'
        }]
    }
);
// get number of reactions for the thought
thoughtSchema
    .virtual('reactionCount')
    .get(function () {
        return `Number of reactions: ${this.reactions.length}`
    });

const Thought = model('thought', thoughtSchema);

module.exports = Thought;