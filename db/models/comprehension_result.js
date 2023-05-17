const { Schema, SchemaTypes } = require("../connect");
const mongoose = require("../connect");
const { SCHEMAS } = require("../../utils/config");
const comResultSchema = new Schema(
  {
    email: { type: SchemaTypes.String, required: true, unique: true },
    results: [
        {
          comprehension_id: {
            type: SchemaTypes.ObjectId,
          },
         
          comprehension_name : {
            type: SchemaTypes.String,
          },
          wpm: {
type: SchemaTypes.Number,
          },
correct_answers: {
    type: SchemaTypes.Number,
},
total_questions: {
    type: SchemaTypes.Number,
},
comprehension_level: {
    type: SchemaTypes.Array
},
attempted_on: {
  type:SchemaTypes.Date
}
        }
      ],
    exclude_comprehensions:  {type: SchemaTypes.Array},
    account_level: {type: SchemaTypes.Number }
  },
  { timestamps: true }
);
const ComResultModel = mongoose.model(SCHEMAS.COMPREHENSIONS_RESULT, comResultSchema);
module.exports = ComResultModel;
