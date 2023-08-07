const { Schema, model } = require('mongoose');

// reaction schema
const reactionSchema = new Schema(
    { // use mongoose ObjectId sew to new Id
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(), 
        }, // string for text
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280,
        }, //username
        username: {
            type: String,
            required: true,
        }, // timestamp for reaction
        createdAt: {
            type: Date,
            default: Date.now,
            get: (date) => {
                if (date) return date.toISOString().split("T") [0];
              }
        },
    }
);



const Reaction = model('reaction', reactionSchema);

module.exports = Reaction;