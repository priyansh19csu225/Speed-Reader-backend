const { Schema, SchemaTypes } = require("../connect");
const mongoose = require("../connect");
const { SCHEMAS } = require("../../utils/config");
const comSchema = new Schema(
  {
    title: { type: SchemaTypes.String, required: true, unique: true },
    comprehension: {type: SchemaTypes.String, required: true },
    questions: [
        {
          answers: {
            type: SchemaTypes.Array,
          },
          options: {
            type: SchemaTypes.Array,
          },
          stmt : {
            type: SchemaTypes.String,
          },
        }
      ],
    level: [],
    wordCount: {type: SchemaTypes.Number }
  },
  { timestamps: true }
);
const ComModel = mongoose.model(SCHEMAS.COMPREHENSIONS, comSchema);
module.exports = ComModel;
