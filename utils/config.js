module.exports = {
  SCHEMAS: {
    COMPREHENSIONS: "comprehensions",
    COMPREHENSIONS_RESULT: 'results'
  },
  STATUS_CODES: {
    NOT_FOUND: 404,
    SUCCESS: 200,
    SERVER_ERROR: 500,
    FILE_NOT_FOUND: 404,
  },
  ROUTES: {
    ROOT: "/",
    COMPREHENSIONS: {
      INSERT : '/api/insert',
      SEARCH_BY_ID: '/api/comprehension',
      COMPREHENSIONS_ALL: '/api/comprehensions',
      DAILY_COMPREHENSION: '/api/dailyexercise',
    },
    COMPREHENSIONS_RESULT: {
      SAVE : '/api/save',
      SEARCH_BY_EMAIL: '/api/search'
    }
  },
};
