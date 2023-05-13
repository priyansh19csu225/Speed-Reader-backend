const ComModel = require("../models/comprehension");
const model = require("../models/comprehension");

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
    const doc = await ComModel.find({});
    if (doc) {
      return doc;
    } else {
      return null;
    }
  }
};