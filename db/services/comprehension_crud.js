const ComModel = require("../models/comprehension");
const model = require("../models/comprehension");
const ComResultModel = require("../models/comprehension_result");
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

module.exports = {
  create(comobject) {
    let promise = model.create(comobject);
    return promise;
  },
  async find(id) {
    const doc = await ComModel.findOne({
      _id : id
    });
    if (doc) {
      return doc;
    } else {
      return null;
    }
  },
  async findAll(){
    const doc = await ComModel.find({}).sort( { "level.0": 1, "wordCount":1 } );
    if (doc) {
      return doc;
    } else {
      return null;
    }
  },
  async returnDaily(email){
    const result = await ComResultModel.findOne({email});
    if(result){
      const exclude_comprehensions = result.exclude_comprehensions;
      const lastAttemptedOnDate = new Date(result.updatedAt);
      const today = new Date();

      // Set the time part of 'today' to 00:00:00
      lastAttemptedOnDate.setHours(0, 0, 0, 0);
      today.setHours(0, 0, 0, 0);

      if (lastAttemptedOnDate.getTime() === today.getTime())
        return {
          msg: "You have already completed your daily exercise for the day. Come back tomorrow!!",
          showDialog: true
        };
      const excludeIds = exclude_comprehensions.map((id) => new ObjectId(id));
      const account_level = result.account_level;
      const doc = await ComModel.aggregate([
        // Exclude comprehensions with matching IDs or levels exceeding the account level
        {
          $match: {
            $and: [
              { _id: { $nin: excludeIds } },
              { level: { $lte: account_level } },
            ],
          },
        },
        // Randomly sort the documents
        { $sample: { size: 1 } },
      ]).catch((error) => console.log(error));

      if (doc) {
        return doc[0];
      }
    }

  const count = 7;

    // Generate a random index within the range of the document count
    const randomIndex = Math.floor(Math.random() * count);
    // Retrieve a random document using the $sample operator
    const randomDocument = await ComModel.aggregate([
      {
        $match: {
         
            level: { $eq: [1] } 
          
        }
      },
      { $skip: randomIndex },
      { $sample: { size: 1 } }
    ]).catch((error) => console.log(error));
    return randomDocument[0];
    
  }
};