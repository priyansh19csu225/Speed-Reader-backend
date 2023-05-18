const ComResultModel = require("../models/comprehension_result");
const comprehensionResultModel = require("../models/comprehension_result");

module.exports = {
  async create(object) {
   
      let comprehensionResult = await ComResultModel.findOne({ email: object.email });
      
      if (comprehensionResult) {
      
        const attempted_on = new Date();
          comprehensionResult.results.push({comprehension_id : object.comprehension_id , attempted_on , comprehension_name: object.comprehension_name , wpm : object.wpm , correct_answers: object.correct_answers , total_questions:object.total_questions, comprehension_level: object.comprehension_level});
          if(!comprehensionResult.exclude_comprehensions.includes(object.comprehension_id)) comprehensionResult.exclude_comprehensions.push(object.comprehension_id);
          comprehensionResult.account_level = object.account_level + 1;
          
          comprehensionResult = await comprehensionResult.save();
         
        return comprehensionResult;
    
      } else {
        //no comprehensionResult for user, create new comprehensionResult
        const attempted_on = new Date();
        const result = {comprehension_id : object.comprehension_id , comprehension_name: object.comprehension_name , wpm : object.wpm , correct_answers: object.correct_answers , total_questions:object.total_questions, attempted_on, comprehension_level: object.comprehension_level}
       const results = [];
       results.push(result);
       const exclude_comprehensions = [];
       exclude_comprehensions.push(object.comprehension_id);
        const newobject = {
          email:object.email,
          results,
          exclude_comprehensions,
          account_level: 1,
          
        }
        const newcomprehensionResult = await comprehensionResultModel.create(newobject);
        
  
        return newcomprehensionResult;
      }
    
  
  },
  async find(email) {
    const doc = await comprehensionResultModel.findOne({
      email : email
    });
    if (doc) {
      return doc;
    } else {
      return null;
    }
  },
 
};