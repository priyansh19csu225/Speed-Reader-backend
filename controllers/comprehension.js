const { SUCCESS, SERVER_ERROR, NOT_FOUND } =
  require("../utils/config").STATUS_CODES;
const messageBundle = require("../locales/en");
const operations = require("../db/services/comprehension_crud");
const comController = {
  
 

  create(request, response) {  
    const promise = operations.create(request.body);
    promise
      .then((doc) => {
        response
          .status(SUCCESS)
          .json({ msg: messageBundle["create.true"], doc: doc });
      })
      .catch((err) => {
        response
          .status(SERVER_ERROR)
          .json({ msg: err.message});
      });
  },
  async find(request, response) {
    const _id = request.query.id;
    try {
      const doc = await operations.find(_id);
      if (doc) {
        response
          .status(SUCCESS)
          .json(
            doc
          );
      } else {
        response
          .status(NOT_FOUND)
          .json({ msg: messageBundle["find.fail"] });
      }
    } catch (err) {
      response
        .status(SERVER_ERROR)
        .json({ msg: messageBundle["find.uncaught"] });
    }
  },
  async findAll(request, response) {
    
    try {
      const doc = await operations.findAll();
      if (doc) {
        response
          .status(SUCCESS)
          .json(
            doc
          );
      } else {
        response
          .status(NOT_FOUND)
          .json({ msg: messageBundle["find.fail"] });
      }
    } catch (err) {
      response
        .status(SERVER_ERROR)
        .json({ msg: messageBundle["find.uncaught"] });
    }
  },
  async returnDaily(request, response) {
    const email = request.query.email;
  
    try {
      const doc = await operations.returnDaily(email);
      if (doc) {
        response
          .status(SUCCESS)
          .json(
            doc
          );
      } else {
        response
          .status(NOT_FOUND)
          .json({ msg: messageBundle["find.fail"] });
      }
    } catch (err) {
      response
        .status(SERVER_ERROR)
        .json({ msg: messageBundle["find.uncaught"] });
    }
  }
};

module.exports = comController;
