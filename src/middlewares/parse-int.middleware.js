module.exports = function (req, res, next) {
  const queryStrings = req.query;
  for (const key in queryStrings) {
    const length = queryStrings[key].length;
    const isValid = length > 20 ? false : !isNaN(parseInt(queryStrings[key]));
    if (isValid) {
      queryStrings[key] = parseInt(queryStrings[key]);
    }
  }

  //myapi.com?pageNum=5
  /*
    {
        pageNum: "5"    
    }
    */
  req.query = queryStrings;
  next();
};
