const reqFilter = (req, res, next) => {
  if (!req.query.age) {
    res.send("Please Provide Age");
  } else if (req.query.age < 18) {
    res.send(
      "You can not access your age it below 18 to access you shoud be 18 or above"
    );
  } else {
    next();
  }
};

export default reqFilter;
