const parseCookies = (req, res, next) => {
  var cookie = req.headers.cookie;
  //console.log('cookie is ', cookie);
  if (cookie !== undefined) {
    cookie.split('; ').forEach(function(result) {
      var fullCookie = result.split('=');
      req.cookies[fullCookie[0]] = fullCookie[1];
    });
  }
  next();
  //console.log('req.cookies is ', req.cookies);
  
};

module.exports = parseCookies;


