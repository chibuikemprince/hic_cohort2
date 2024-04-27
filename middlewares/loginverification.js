function isEmailPassed(req, res, next) {
  var email = req.body.email;
  if (email == null || email == undefined || email == "") {
    res.status(400).json({
      status: "error",
      message: "Email is required",
    });
  } else {
    next();
  }
}

function passwordPassed(req, res, next) {
  var password = req.body.password;
  if (password == null || password == undefined || password == "") {
    res.status(400).json({
      status: "error",
      message: "password is required",
    });
  } else {
    res.status(200).json({
      status: "success",
      message: "email and password is valid",
    });
  }
}

module.exports = { isEmailPassed, passwordPassed };
